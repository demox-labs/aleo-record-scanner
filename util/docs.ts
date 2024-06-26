import * as fs from 'fs';
import * as path from 'path';

function generateMarkdown(docString: string, methodName: string): string {
  const descriptionMatch = docString.match(/\/\*\*\s*\*\s*([\s\S]+?)\s*\*\s*@param|@returns/);
  const returnsMatch = docString.match(/@returns\s*\{(.+?)\}\s*-\s*(.+)/);
  const throwsMatch = docString.match(/@throws\s*\{(.+?)\}\s*-\s*(.+)/);
  const exampleMatch = docString.match(/@example\s*([\s\S]+?)\s*(?:@response|$)/);
  const responseMatch = docString.match(/@response\s*([\s\S]+?)\s*\*\//);
  const paramMatches = docString.match(/@param\s*\{(.+?)\}\s*(.+?)\s*-\s*(.+)/g);

  let markdownContent = `# ${methodName.replace(/\*$/, '')}\n\n`;

  if (descriptionMatch && descriptionMatch[1]) {
    markdownContent += `${descriptionMatch[1].trim()}\n\n`;
  }

  markdownContent += "## Parameters:\n";
  if (paramMatches && paramMatches.length > 0) {
    paramMatches.forEach(paramMatch => {
      const paramDetail = paramMatch.match(/@param\s*\{(.+?)\}\s*(.+?)\s*-\s*(.+)/);
      if (paramDetail) {
        markdownContent += `- \`${paramDetail[2]}\` (\`${paramDetail[1]}\`) - ${paramDetail[3].trim()}\n`;
      }
    });
  } else {
    markdownContent += "- None\n";
  }
  markdownContent += "\n";

  if (returnsMatch && returnsMatch[1] && returnsMatch[2]) {
    markdownContent += `## Result:\n- \`${returnsMatch[1]}\` - ${returnsMatch[2].trim()}\n\n`;
  }

  if (throwsMatch && throwsMatch[1] && throwsMatch[2]) {
    markdownContent += `## Throws:\n- \`${throwsMatch[1]}\` - ${throwsMatch[2].trim()}\n\n`;
  }

  if (exampleMatch && exampleMatch[1]) {
    const example = exampleMatch[1].replace(/\*\s?/g, '').replace('@response', '').trim();
    markdownContent += `## Example Request\n\n\`\`\`\n${example}\n\`\`\`\n\n`;
  }

  if (responseMatch && responseMatch[1]) {
    const response = responseMatch[1].replace(/\*\s?/g, '').trim();
    markdownContent += `## Example Response\n\n\`\`\`\n${response}\n\`\`\`\n\n`;
  }

  return markdownContent;
}

async function generateDocs() {
  try {
      const data = fs.readFileSync(path.join(__dirname, '../src/server.ts'), 'utf8');
      const docsDir = path.join(__dirname, '../docs');
      const readmeContent = fs.readFileSync(path.join(__dirname, '../util/README.md'), 'utf8');

      if (!fs.existsSync(docsDir)) {
          fs.mkdirSync(docsDir);
      }

      const methodMatches = data.match(/\/\*\*([\s\S]+?)\*\/\s*server\.addMethod\("(.+?)", async (.+?) =>/g);

      if (methodMatches) {
          let markdownContent = readmeContent + "\n\nThe following methods are available:\n";

          methodMatches.forEach((methodMatch) => {
              const docCommentMatch = methodMatch.match(/\/\*\*([\s\S]+?)\*\//);
              const methodSignatureMatch = methodMatch.match(/server\.addMethod\("(.+?)", async (.+?) =>/);

              if (docCommentMatch && methodSignatureMatch) {
                  const methodName = methodSignatureMatch[1];
                  const methodFileName = methodName.replace(/\//, '_');
                  markdownContent += `- [${methodName}](./${methodFileName}.md)\n`;
                  const methodContent = generateMarkdown(methodMatch, methodName);
                  fs.writeFileSync(path.join(docsDir, `${methodFileName}.md`), methodContent);
              }
          });

          fs.writeFileSync(path.join(docsDir, 'README.md'), markdownContent);
          console.log('Documentation generated successfully.');
      } else {
          console.log('No matches found.');
      }
  } catch (err) {
      console.error(err);
  }
}

generateDocs();