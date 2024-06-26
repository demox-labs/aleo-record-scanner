import { createHash } from 'crypto';
import { BN } from 'bn.js';
import { decode } from 'bech32-buffer';

export function convertFromSnake(input: string): string {
  return input
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function convertToSnake(input: string): string {
  return input
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Add an underscore before each uppercase letter that follows a lowercase letter
    .toLowerCase();
}

export function getCoinbaseReward(height: number, last_timestamp: number, timestamp: number) {
  const anchor_reward = BigInt(13);
  const y10_anchor_height = (BigInt(31536000) / BigInt(25)) * BigInt(10);

  const remaining_blocks = y10_anchor_height - BigInt(height);
  if (remaining_blocks <= BigInt(0)) {
      return BigInt(0);
  }

  let drift = BigInt(Math.max(timestamp - last_timestamp, 1) - 25);
  const prev_target = remaining_blocks * anchor_reward;
  if (drift == BigInt(0)) {
      return prev_target;
  }
  drift = drift * BigInt(-1);
  const exponent = (BigInt(1 << 16)) * drift / BigInt(25);
  const integral = exponent >> BigInt(16);
  const fractional = exponent - (integral << BigInt(16));
  let multiplier = BigInt(195_766_423_245_049) * fractional;
  multiplier = multiplier + BigInt(971_821_376) * fractional ** BigInt(2);
  multiplier = multiplier + BigInt(5_127) * fractional ** BigInt(3);
  multiplier = multiplier + BigInt(2) ** BigInt(47);
  const fractional_multiplier = BigInt(1 << 16) + (multiplier >> BigInt(48));
  let candidate_target = prev_target * fractional_multiplier;
  const shifts = integral - BigInt(16);
  if (shifts < 0) {
      candidate_target = candidate_target >> -shifts > BigInt(1) ? candidate_target >> -shifts : BigInt(1);
  } else {
      candidate_target = candidate_target >> shifts > BigInt(1) ? candidate_target >> -shifts : BigInt(1);
  }
  const max_candidate_target = BigInt(2) ** BigInt(64) - BigInt(1);
  candidate_target = candidate_target > max_candidate_target ? max_candidate_target : candidate_target;
  return candidate_target;
}

export function toTarget(commitment: string) {
  const bytes = Buffer.from(decode(commitment).data);
  const firstHash = createHash('sha256').update(bytes.subarray(0, 48)).digest();
  const secondHash = createHash('sha256').update(firstHash).digest();
  const slice = secondHash.subarray(0, 8);
  const divisor = (new BN(slice, 'le')).toString();

  return (BigInt(2) ** BigInt(64) - BigInt(1)) / BigInt(divisor);
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Aleo uses funky serialization for its JSON objects. This function takes that funky representation
 * and makes it a valid json object
 * @param jsonString Invalid aleo json string
 * @returns A valid, JSON.parse-able string
 */
export function formatJsonString(jsonString: string) {
  const keyValueRegex = /([a-zA-Z0-9_]+)(\s*):(\s*)([a-zA-Z0-9_.]+)/g;
  const objectArrayRegex = /([a-zA-Z0-9_]+)(\s*):(\s*)(\{|\[)/g;

  function process(json: string) {
    const replacedKeys = json.replace(objectArrayRegex, (_, key, space1, space2, open) => {
      return `"${key}"${space1}:${space2}${open}`;
    });

    let replacedValues = replacedKeys.replace(keyValueRegex, (_, key, space1, space2, value) => {
      return `"${key}"${space1}:${space2}"${value}"`;
    });

    const nestedMatch = replacedValues.match(objectArrayRegex);

    if (nestedMatch) {
      for (const match of nestedMatch) {
        const open = match[match.length - 1];
        const close = open === '{' ? '}' : ']';
        const nestedStart = replacedValues.indexOf(match) + match.length - 1;
        let nestedEnd = nestedStart;
        let balance = 1;

        while (balance > 0) {
          nestedEnd++;
          if (replacedValues[nestedEnd] === open) {
            balance++;
          } else if (replacedValues[nestedEnd] === close) {
            balance--;
          }
        }

        const nestedJson = replacedValues.slice(nestedStart, nestedEnd + 1);
        const formattedNestedJson = process(nestedJson);
        replacedValues = replacedValues.replace(nestedJson, formattedNestedJson);
      }
    }

    return replacedValues;
  }

  return process(jsonString);
}

export function isMoreThanFiveMinutesDifferent(timestampStr: string): boolean {
  // Convert the timestamp string to a number
  const timestamp = Number(timestampStr);

  // Create a Date object from the timestamp
  const timestampDate = new Date(timestamp * 1000); // Convert to milliseconds

  // Get the current UTC timestamp
  const currentDate = new Date();

  // Calculate the difference in time (in milliseconds)
  const timeDifference = Math.abs(currentDate.getTime() - timestampDate.getTime());

  // Convert the time difference to minutes
  const differenceInMinutes = timeDifference / (1000 * 60);

  // Check if the difference is more than 5 minutes
  return differenceInMinutes > 5;
}
