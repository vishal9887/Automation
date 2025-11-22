// Mock API to simulate generating code from a prompt
export async function simulateGenerateCode({ prompt, language }) {
  // Wait 800ms to mimic network/processing delay
  await new Promise((res) => setTimeout(res, 800))

  // Return hardcoded snippets based on selected language
  const snippets = {
    python: `# Python example generated from prompt:\n# ${prompt}\n\ndef greet(name):\n    return f"Hello, {name}!"\n\nif __name__ == '__main__':\n    print(greet('World'))\n`,
    javascript: `// JavaScript example generated from prompt:\n// ${prompt}\n\nfunction greet(name) {\n  return ` + "`Hello, ${name}!`" + `\n}\n\nconsole.log(greet('World'))\n`,
    cpp: `// C++ example generated from prompt:\n// ${prompt}\n\n#include <iostream>\n#include <string>\n\nstd::string greet(const std::string &name) {\n    return "Hello, " + name + "!";\n}\n\nint main() {\n    std::cout << greet("World") << std::endl;\n    return 0;\n}\n`
  }

  const key = language === 'Python' || language === 'python' ? 'python' : language === 'C++' || language === 'cpp' ? 'cpp' : 'javascript'
  return { code: snippets[key] }
}
