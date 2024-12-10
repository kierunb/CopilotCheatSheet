# Copilot Labs & Demos

![GitHub Copilot images](img/github-copilot.png)

## Introduction to GitHub Copilot

### Understand Copilot's strengths and weaknesses

GitHub Copilot is an AI coding assistant that helps you write code faster and with less effort, allowing you to focus more energy on problem solving and collaboration. Before you start working with Copilot, it's important to understand when you should and shouldn't use it.

Some of the things Copilot does best include:

- Writing tests and repetitive code
- Debugging and correcting syntax
- Explaining and commenting code
- Generating regular expressions

Copilot is not designed to:

- Respond to prompts unrelated to coding and technology
- Replace your expertise and skills. Remember that you are in charge, and Copilot is a powerful tool at your service.

### Choose the right Copilot tool for the job

While Copilot code completions and Copilot Chat share some functionality, the two tools are best used in different circumstances.

Code completions work best for:

- Completing code snippets, variable names, and functions as you write them
- Generating repetitive code
- Generating code from inline comments in natural language
- Generating tests for test-driven development

Alternatively, Copilot Chat is best suited for:

- Answering questions about code in natural language
- Generating large sections of code, then iterating on that code to meet your needs
- Accomplishing specific tasks with keywords and skills. Copilot Chat has built-in keywords and skills designed to provide important context for prompts and accomplish common tasks quickly. Different types of keywords and skills are available in different Copilot Chat platforms. See "[Asking GitHub Copilot questions in your IDE.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide#using-keywords-in-your-prompt)"
- Completing a task as a specific persona. For example, you can tell Copilot Chat that it is a Senior C++ Developer who cares greatly about code quality, readability, and efficiency, then ask it to review your code.

### Create thoughtful prompts

Prompt engineering, or structuring your request so Copilot can easily understand and respond to it, plays a critical role in Copilot's ability to generate a valuable response. Here are a few quick tips you should remember while crafting your prompts:

- Break down complex tasks.
- Be specific about your requirements.
- Provide examples of things like input data, outputs, and implementations.
- Follow good coding practices.

To learn more, see: 

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

#### Prerequisities

- Latest version of Visual Studio Code
- [GitHub Copilot extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitHub Copilot Chat extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)
- GitHub Copilot license
    - [Setup](https://docs.github.com/en/copilot/setting-up-github-copilot/setting-up-github-copilot-for-your-organization)
- Other optional extension to support coding in your favourite programming langauge

## Copilot features

- [GitHub Copilot](https://github.com/features/copilot)
- [GitHub Copilot features](https://docs.github.com/en/copilot/about-github-copilot/github-copilot-features)
- [GitHub Copilot Blogs](https://github.blog/tag/github-copilot/)

## Using Copilot

- [Best practices for using GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)

### Code suggestions

Creaty empty folder, open it in VS Code, create empty javascript file (e.g. test.js) and just start typing. GitHub Copilot offers coding suggestions as you type. For example, type this function header in a JavaScript file:

```javascript
function calculateDaysBetweenDates(begin, end) {
```

You can also describe something you want to do using natural language within a comment, and Copilot will suggest the code to accomplish your goal. For example, type this comment in a JavaScript file:

```javascript
// write a function to calculate number of days between provided dates
```
Generate lists or dictionaries with sample data:

```javascript
// Produce IO exemplars for sentiment analysis. Examples are categorized as either positive or negative. 
// Produce 2 negative examples and 8 positive examples. 
// Each example should be a string.
```

Work with regular expressions (regex):

```javascript
// Create a regex to validate phone number in this format (xxx) xxx-xxxx.
```

Work with external APIs:

```javascript
// Write a function to retrieve dog breeds from following API 'https://dog.ceo/api/breed/' and return an array of breed objects
```

Use @file to provide context of specific file:

```javascript
// Use sample.json file to generate a strongly typed class or interface.
```

Work with SQL queries. Define data structure (e.g. struct, class) like Product(Id, Name, Price, Description) for best results.
```javascript
//Generate sql to insert Product object into database.
```


Unit testing:
```javascript
// test caclulator function
// create unit test for a calculator function using assert/jest framework
```

#### Code suggestions in IDE - basics

- Suggestions appear as you type.
- Accept whole suggestion with <kbd>Tab</kbd>.
- Accept word by word <kbd>Ctrl + -></kbd>.
- Navigate through multpile solutions (Completion Panel) with <kbd>Ctrl + Enter</kbd>.
- Guide Copilot with **instructions within the function** to provide conditions, assertions and so on.
- Inline chat <kbd>Ctrl + I</kbd> might be better than "ghost text" in many cases.
- Don't recreate common prompts - use **slash commands**.
- Don't forget about context.

#### Essential keyboard shortcuts:

Reference: [GitHub Copilot in VS Code cheat sheet](https://code.visualstudio.com/docs/copilot/copilot-vscode-features)

Essential keyboard shortcuts:

- <kbd>Tab</kbd> - Accept suggestion
- <kbd>Alt + ]</kbd> - Next suggestion
- <kbd>Alt + [</kbd> - Previous suggestion 

More infromation:
- [Getting code suggestions in your IDE with GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot)

### Chat in IDE

Press <kbd>Ctrl+Alt+I</kbd> to open the chat window

Press <kbd>Ctrl+I</kbd> to open the inline chat

#### Chat participants

Chat participants are AI domain experts that can perform tasks or answer questions in a specific domain.

Chat participants include:

- <kbd>@workspace</kbd>: Has context about the code in your workspace. Use @workspace when you want Copilot to consider the structure of your project, how different parts of your code interact, or design patterns in your project.
- <kbd>@vscode</kbd>: Has context about Visual Studio Code commands and features. Use @vscode when you want help with Visual Studio Code.
- <kbd>@terminal</kbd>: Has context about the Visual Studio Code terminal shell and its contents. Use - @terminal when you want help creating or debugging terminal commands.
- <kbd>@azure</kbd>: Has context about Azure services and how to use, deploy and manage them. Use @azure when you want help with Azure. The @azure chat participant is currently in public preview and is subject to change.

#### Slash commands

Use slash commands to avoid writing complex prompts for common scenarios. To use a slash command, type / in the chat prompt box, followed by a command. Slash commands include:

- <kbd>/tests</kbd>: Generate unit tests for the selected code
- <kbd>/fix</kbd>: Propose a fix for problems in the selected code
- <kbd>/explain</kbd>: Explain the selected code
- <kbd>/clear</kbd>: Start a new chat


#### Chat variables

Use chat variables to include specific context in your prompt. To use a chat variable, type # in the chat prompt box, followed by a chat variable. Chat variables include:

- <kbd>#file</kbd>: Include a specific file as context in the chat.
- <kbd>#git</kbd>: Include information about the current Git repository.
- <kbd>#terminalLastCommand</kbd>: Include the last run command in the active Visual Studio Code terminal.

#### GitHub skills for Copilot

Copilot's GitHub-specific skills expand the type of information Copilot can provide. To access these skills in Copilot Chat in VS Code, include @github in your question.

You can generate a list of currently available skills by asking Copilot: @github What skills are available?

| Skill                    | Description                                                                                                                                                                                                                                                                                                      | Enabled by default?                                                                                                                                                | Example question                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Commit details           | Retrieves a list of commits, or the contents of a specific commit, to provide answers to commit-related questions.                                                                                                                                                                                               | Yes                                                                                                                                                                | @github Explain the changes in the code of this commit                                                |
| Discussion details       | Retrieves a specific GitHub discussion. This is useful for quickly getting the gist of the conversation in a discussion.                                                                                                                                                                                         | Yes                                                                                                                                                                | @github Summarize this discussion LINK-TO-DISCUSSION                                                  |
| File details             | Retrieves a specific file in the default branch of the Git repository, allowing you to ask questions about the file and the recent changes made to it. This skill is useful when you provide the exact path of a file in the repository.                                                                         | Yes                                                                                                                                                                | @github What logic does user_auth.js encapsulate?   @github What is the file history of user_auth.js? |
| GitHub Advanced Security | Retrieves information about security alerts within your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts).                                                                                                                                             | Yes                                                                                                                                                                | @github How would I fix this code scanning alert?                                                     |
| Issue details            | Retrieves a specific GitHub issue, including the issue's title, number, author, status, body, linked pull requests, comments, and timestamps.                                                                                                                                                                    | Yes                                                                                                                                                                | @github List issues assigned to me                                                                    |
| Lexical code search      | Keyword code search in the default branch of the Git repository. This skill is useful when you want to know about specific functions, methods or keywords that exist in the code. This skill leverages most of the functionality available to GitHub Search like symbol and path.                                | Yes                                                                                                                                                                | Find me the tests for the GitService class                                                            |
| Path search              | Retrieves a specific file in the default branch of the Git repository. This skill is useful when you provide the exact path of a file in the repository.                                                                                                                                                         | Yes                                                                                                                                                                | @github What logic does user_auth.js encapsulate?                                                     |
| Pull request details     | Retrieves a specific pull request. This allows you to ask questions about the pull request, including getting a summary of the pull request, its comments, or the code it changes.                                                                                                                               | Yes                                                                                                                                                                | @github List my recent pull requests                                                                  |
| Release details          | Retrieves the latest, or specified, release. This allows you to find out who created a release, when it happened, and information included in the release notes.                                                                                                                                                 | Yes                                                                                                                                                                | @github When was the latest release?                                                                  |
| Repository details       | Retrieves a specific GitHub repository. This is useful for finding out details such as the repository owner and the main language used.                                                                                                                                                                          | Yes                                                                                                                                                                | @github Tell me about PATH-TO-REPOSITORY                                                              |
| Semantic code search     | Natural language semantic code search in the default branch of the Git repository. This skill is useful when you want to know where or how certain functionality has been implemented in the code. Note: this requires indexing to be enabled for the repository (see "Indexing repositories for Copilot Chat"). | Yes Available for all repositories with a Copilot Enterprise subscription, and for public repositories with a Copilot Individual or Copilot Business subscription. | How does this repo manage HTTP requests and responses?                                                |
| Support search           | Retrieves information from the GitHub Support portal. This skill is useful for asking Copilot Chat about GitHub products and support related questions.                                                                                                                                                          | Yes                                                                                                                                                                | @github Can I use Copilot knowledge bases with Copilot Individual?                                    |
| Web search               | Searches the web using the Bing search engine. This skill is useful for teaching Copilot about recent events, new developments, trends, technologies, or extremely specific, detailed, or niche subjects.                                                                                                        | No For Copilot Individual:Enable in your user settings.For Copilot Business:Enable in organization settings.                                                       | @github #web What are some recent articles about SAT tokens securing against vulnerabilities in Node? |


#### Essential keyboard shortcuts:
- <kbd>Ctrl+Alt+I</kbd> - Open the chat view
- <kbd>Ctrl+I</kbd> - Open the inline chat

More infromation:
- [Asking GitHub Copilot questions in your IDE](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide)

### Chat in GitHub

You can use GitHub Copilot Chat in GitHub to answer general questions about software development, or specific questions about the issues or code in a repository.

> [!TIP]
> Look for GitHub Copilot icon next to the search bar, in Code window or with code selection.

On GitHub, you can use Copilot Chat to ask:

- General software-related questions, without a particular context. For more information, see "[Asking a general question about software development.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-a-general-question-about-software-development)"

    - Examples:
        - What are the advantages of the Go programming language?
        - What is Agile software development?
        - What is the most popular JavaScript framework?
        - Give me some examples of regular expressions.
        - Write a bash script to output today's date.

- Exploratory questions asked in the context of a specific repository. For more information, see "[Asking exploratory questions about a repository.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-exploratory-questions-about-a-repository)"

    - Examples:
        - When was the most recent release?
        - Where is rate limiting implemented in our API?
        - How does the WidgetFactory class work?
        - Where is the code for updating a phone number?
        - Where are SAT tokens generated?
        - Show the most recently updated issues assigned to USERNAME
        - List open issues about SUBJECT
        - What was the last merged PR by USERNAME
        - What are the latest commits to the main branch by USERNAME
        
- Questions asked in the context of a specific repository, file or symbol. For more information, see "[Asking a question about a specific file or symbol.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-a-question-about-a-specific-file-or-symbol)"

- Questions about a specific file or specified lines of code within a file. For more information, see "[Asking questions about specific pieces of code.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-questions-about-specific-pieces-of-code)"

    - For example, if you are asking about the entire file, you could enter:
        - Explain this file.
        - How could I improve this code?
        - How can I test this script?
    - If you are asking about specific lines, you could enter:
        - Explain the function at the selected lines.
        - How could I improve this class?
        - Add error handling to this code.
        - Write a unit test for this method.

- Questions about a pull request diff. For more information, see "[Finding out about the changes in a pull request.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-questions-about-a-specific-pull-request)"

    - Examples:
        - Summarize this PR for me.
        - Summarize the comments in this PR.
        - Summarize the changes in this PR.

- Questions about a specific issue. For more information, see "[Asking a question about a specific issue or discussion.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-a-question-about-a-specific-issue-or-discussion)"

    - Examples:
        - Explain this issue
        - Summarize this discussion
        - Recommend next steps for this issue
        - What are the acceptance criteria for this issue?
        - What are the main points made by PERSON in this discussion?

- Questions about GitHub Advanced Security alerts. For more information, see "[Asking questions about GitHub Advanced Security alerts.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github#asking-questions-about-github-advanced-security-alerts)"

    - Examples
        - How would I fix this alert?
        - How many alerts do I have on this pull request?
        - Which line of code is this code scanning alert referencing?
        - What library is affected by this Dependabot alert?

More infromation:
- [Asking GitHub Copilot questions in GitHub](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github)

### Chat in Mobile

GitHub Copilot Chat is a chat interface that lets you ask and receive answers to coding-related questions in GitHub Mobile.
Copilot Chat in GitHub Mobile can help you with a variety of coding-related tasks, like offering you code suggestions, providing natural language descriptions of a piece of code's functionality and purpose, generating unit tests for your code, and proposing fixes for bugs in your code.

In GitHub Mobile, you can use Copilot Chat to ask:

- General software-related questions, without a particular context. For more information, see "[Asking a general question about software development.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile#asking-a-general-question-about-software-development)"

    - Some examples of general questions you could ask are:
        - What are the advantages of the Go programming language?
        - What is Agile software development?
        - What is the most popular JavaScript framework?
        - Give me some examples of regular expressions.
        - Write a bash script to output today's date.

- Questions asked in the context of your project. For more information, see "[Asking questions about a specific repository.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile#asking-exploratory-questions-about-a-repository)"

    - For example, if you chose the repository you are working in as the context, you could ask:
        - What is the main purpose of this repo? What problem does it solve or what functionality does it provide?
        - What web frameworks are used in this project?
        - Where is rate limiting implemented in our API?
        - How is the code organized? Explain the project architecture.
        - Are there any specific environment requirements for working on this project?

- Questions about a specific file or specified lines of code within a file. For more information, see "[Asking questions about specific pieces of code.](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile#asking-questions-about-specific-pieces-of-code)"

    - For example, if you are asking about the entire file, you could enter:
        - Explain this file.
        - How could I improve this code?
        - How can I test this script?
    - If you are asking about specific lines, you could enter:
        - How could I improve this class?
        - Add error handling to this code.
        - Write a unit test for this method.

More infromation:
- [Asking GitHub Copilot questions in GitHub Mobile](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-github-mobile)


### GitHub Copilot in the command line

To ask Copilot in the CLI to explain a command, run gh copilot explain followed by the command that you want explained. For example:

```cli
gh copilot explain "sudo apt-get"
gh copilot suggest "Undo the last commit"
```


More infromation:
- [Using GitHub Copilot in the command line](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-in-the-command-line)

### Copilot in Windows Terminal

More infromation:
- [Asking GitHub Copilot questions in Windows Terminal](https://docs.github.com/en/copilot/using-github-copilot/asking-github-copilot-questions-in-windows-terminal)
- [Terminal Chat](https://learn.microsoft.com/en-us/windows/terminal/terminal-chat#setting-up-terminal-chat)

### Using Copilot Extensions

GitHub Copilot Extensions are a type of GitHub App that integrates the power of external tools into GitHub Copilot Chat. Copilot Extensions can be developed by anyone, for private or public use, and can be shared with others through the GitHub Marketplace.

You can get started with Copilot Extensions in one of two ways:

- Build your own Copilot Extension. See "[About building Copilot Extensions.](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)"
- Install a Copilot Extension from GitHub Marketplace.

More infromation:
- [Using extensions to integrate external tools with Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat)

### Copilot for Pull Requests

After you create a pull request, you can continue working on the PR on the GitHub website. This article is about Copilot Workspace, which provides a Copilot-enabled environment for:

- Refining your pull requests
- Validating changes
- Integrating suggestions from reviewers

Copilot Workspace enables you to work on your pull requests in one place - on GitHub - from pull request creation to merge.

You can use GitHub Copilot to generate a summary of a pull request on GitHub. You can use the summary to help reviewers understand your changes, or to quickly understand the changes in a pull request you're reviewing.

GitHub Copilot will scan through the pull request and provide an overview of the changes made in prose, as well as a bulleted list of changes with the files that they impact. You can generate a summary in the following places.

- In the description of a new pull request you're creating
- In the description of an existing pull request, by editing the opening comment
- In a comment on the main timeline of a pull request

More infromation:
- [Using Copilot to help you work on a pull request](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests/using-copilot-to-help-you-work-on-a-pull-request)
- [Creating a pull request summary with GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot)

## Prompt Engineering with Copilot

- Provide good **context**; giving examples and information about what you're trying to achieve
- Be **specific**; if it's for a certain audience, say that
- **Break down** the problem
- Be **clear** in how you ask your questions. If something comes back that doesn't sound right, clarify it
- **Rephrase and refine** for your prompts


### 3S Principle of Prompt Engineering

- **Simple**
    - The more code - the more errors and hallucinations
    - Break your solution in simple steps
    - Use 'simple' word in prompt
    - Keep relevant files open
    - The best prompt is one you don't have to write
- **Specific**  
    - Don't ask open question
    - Use '@workspace' agent to focus on your project as a base for agents (especially in Chat window)
    - Use includes like '#editor', '#file', '#selection' or '#terminalLastCommand'
    - Always use specific context and specific prompts
- **Short**
    - You don't need to phrase long question
    - You don't need to use proper grammar
    - Type less because typos don't matter
    - Command-like prompts are OK

Simple, specific and short:
```
fixed header
fixed footer
main content scrolls between header and footer
```     
Notice three short prompts insted of large one.

#### Prompting Tips & Trics

##### Getting the most out of Copilot inline suggestions

- **Provide context**
    - Keep relevant files open (source code, input files, even data files like json/xml)
        - For code completions, Copilot looks at the current and open files in your editor to analyze the context and create appropriate suggestion
    - Provide description on top of the file (E.g. This file parses xyz.json file)
        - Just as you would give a brief, high-level introduction to a coworker, a top level comment in the file you're working in can help Copilot understand the overall context of the pieces you are creating.
    - Appropriate includes and references (Provide imports/usings etc. for specific packages, namespaces or libraries)
        - It's best to manually set the includes or module references you need for your work. Copilot can make suggestions, but you likely know best what dependencies you need to include. This can also help let Copilot know what frameworks, libraries, and their versions you'd like it to use when crafting suggestions.
    - Provide specific and desriptive variable, type, function and parameter names
        - Using meaningful function names helps Copilot provide a body that does what you want.
    - Specific and well-scoped function comments (Give inline hints (in comments inside functions))
        - A function name can only be so descriptive without being overly long. Function comments can help fill in details that Copilot might need to know.
    - Prime Copilot with sample code
        - One trick to get Copilot on the right page, is to copy and paste sample code that is close to what you are looking for into your open editor. Providing a small example can help Copilot generate suggestions that match the language and tasks you want to achieve. Once Copilot begins providing you with the code you want and will actually use, you can delete the sample code from the file. This can be especially helpful to jump start Copilot to a newer library version when it defaults to providing older code suggestions.
- Be predictable (standard naming conventions etc.)
- Be consistent and keep the quality bar high
    - Copilot is going to latch on to your code to generate suggestions that follow the existing pattern, so the adage "garbage in, garbage out" applies.
    - Always keeping a high quality bar can take discipline. Especially when you're coding fast and loose to get something working, you might want to disable Copilot completions while in "hacking" mode. You can temporarily disable completions from the Copilot status menu. Bring up the Copilot status menu dropdown by selecting the Copilot Status bar item.
- Double check code against documentation
    - If code or syntax provided by Copilot is from older version of langauge or library - copy and paste a more up-to-date example from documentation
- Start code generation by defining proper data/entity models, schemas, data structures etc. (e.g. while using MVC pattern)

##### Getting the most out of Copilot Chat

- Use chat participants and slash commands
    - [Chat participants](https://code.visualstudio.com/docs/copilot/copilot-chat#_chat-participants) are designed to collect extra context either about a code base or a specific domain or technology. By using the appropriate participant, Copilot Chat can find and provide better information to send to the Copilot backend. For example, use @workspace if you want to ask questions about your open project, or @vscode to know more about VS Code features and APIs.
    - [Slash commands](https://code.visualstudio.com/docs/copilot/copilot-chat#_slash-commands) help Copilot Chat understand your intent when you ask a question. Are you learning about a code base (/explain), do you want help with fixing an issue (/fix), or are you creating test cases (/tests)? By letting Copilot Chat know what you're trying to do, it can tune its reply to your task and provide helpful commands, settings, and code snippets.
- Use chat variables for context
    - Chat participants, such as **@workspace** or **@vscode**, can contribute chat variables that provide domain-specific context. You can reference a chat variable in your chat prompt by using the # symbol. By using a chat variable, you can be more specific about the context that you include in your chat prompt.
    - For example, the **#file** variable lets you reference specific files from your workspace in your chat prompt. This helps make the answers from Copilot Chat more relevant to your code by providing context about the file you are working with. You can ask questions like "Can you suggest improvements to #file:package.json?" or "How do I add an extension in #file:devcontainer.json?". By using the #file variable, you can get more targeted and accurate responses from Copilot.
- Be specific and keep it simple
    - When you ask Copilot to do something, be specific in your ask and break down a large task into separate, smaller tasks. For example, don't ask Copilot to create an Express app, that uses TypeScript and Pug, and that has a products page that retrieves data from a MongoDB database. Instead, first ask Copilot to create the Express app with TypeScript and Pug. Next, ask to add a products page, and finally ask to retrieve the customer data from a database.
    - When you ask Copilot to do a specific task, be specific about the inputs, outputs, APIs, or frameworks you want to use. The more specific your prompt is, the better the outcome will be. For example, instead of "read product data from the database", use "read all products by category, return the data in JSON format, and use the Mongoose library".
- Iterate on your solution
    - When asking Copilot Chat for help, you aren't stuck with the first response. You can iterate and prompt Copilot to improve the solution. Copilot has both the context of the generated code and also your current conversation.
    - Even if you've already accepted a result, you can always ask Copilot to iterate on the code later.

More resources about prompting for Copilot:
- [Best practices for using GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/prompt-crafting)
- [Effective Prompting for GitHub Copilot](https://www.youtube.com/watch?v=ImWfIDTxn7E)
- [Pragmatic techniques to get the most out of GitHub Copilot](https://www.youtube.com/watch?v=CwAzIpc4AnA)
- [Best practices for prompting GitHub Copilot in VS Code](https://www.linkedin.com/pulse/best-practices-prompting-github-copilot-vs-code-pamela-fox)
- [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)

### Basic techniques

- Neighboring Tabs
- [Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot)
- One-Shot Prompting
- [Few-Shot Prompting](https://www.promptingguide.ai/techniques/fewshot)
- [Role Prompting](https://github.com/f/awesome-chatgpt-prompts)
- Let's Think Step by Step


More infromation:

- [Prompt engineering for GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)

### Ask general software questions

You can ask Copilot Chat general software questions. For example:

- tell me about nodejs web server frameworks
- how to create an express app
- @terminal how to update an npm package

### Ask questions about your project

You can ask Copilot Chat questions about your project.

- what sorting algorithm does this function use
- @workspace how are notifications scheduled
- #file:gameReducer.js #file:gameInit.js how are these files related

To give Copilot the correct context, try some of these strategies:

- Highlight relevant lines of code
- Use chat variables like #selection, #file, #editor, #codebase, or #git
- Use the @workspace chat participant

### Write code

You can ask Copilot to write code for you. For example:

- write a function to sum all numbers in a list
- add error handling to this function
- @workspace add form validation, similar to the newsletter page

When Copilot returns a code block, the response includes options to copy the code, or to insert the code at your cursor, into a new file, or into the terminal.

### Ask questions about alerts from GitHub Advanced Security features

You can ask Copilot about security alerts in repositories in your organization from GitHub Advanced Security features (code scanning, secret scanning, and Dependabot alerts). For example:

- How would I fix this alert?
- How many alerts do I have on this pull request?
- Which line of code is this code scanning alert referencing?
- What library is affected by this Dependabot alert?

### Set up a new project

Use the /new slash command to set up a new project. For example:

- /new react app with typescript
- /new python django web application
- /new node.js express server
- Copilot will suggest a directory structure and provide a button to create the suggested files and contents. To preview a suggested file, select the file name in the suggested directory structure.

Use the /newNotebook slash command to set up a new Jupyter notebook. For example:

- /newNotebook retrieve the titanic dataset and use Seaborn to plot the data

### Fix, improve, and refactor code

If your active file contains an error, use the /fix slash command to ask Copilot to fix the error.

You can also make general requests to improve or refactor your code.

- how would you improve this code?
- translate this code to C#
- add error handling to this function

### Write tests

Use the /tests slash command to ask Copilot to write tests for the active file or selected code. For example:

- /tests
- /tests using the Jest framework
- /tests ensure the function rejects an empty list

The /tests slash command writes tests for existing code. If you prefer to write tests before writing code (test driven development), omit the /tests command. For example:

- Add tests for a JavaScript function that should sum a list of integers

### Ask questions about Visual Studio Code

Use the @vscode chat participant to ask specific questions about Visual Studio Code. For example:

- @vscode tell me how to debug a node.js app
- @vscode how do I change my Visual Studio Code colors
- @vscode how can I change key bindings

### Ask questions about the command line

Use the @terminal chat participant to ask specific questions about the command line. For example:

- @terminal find the largest file in the src directory
- @terminal #terminalLastCommand to explain the last command and any errors

### Refactor code

Refactoring code is the process of restructuring existing code without changing its behavior. The benefits of refactoring include improving code readability, reducing complexity, making the code easier to maintain, and allowing new features to be added more easily.

Typical use cases:
- Understanding code
- Optimizing inefficient code
- Cleaning up repeated code
- Making code more concise
- Splitting up complex units of code
- Rewrite conditional code for better readability
- Reformat code to use a different structure
- Improving the name of a symbol

More infromation:
- [Refactoring code with GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/guides-on-using-github-copilot/refactoring-code-with-github-copilot)

### Testing code

GitHub Copilot can assist you in developing tests quickly and improving productivity. In this article, we’ll demonstrate how you can use Copilot to write both unit and integration tests. While Copilot performs well when generating tests for basic functions, complex scenarios require more detailed prompts and strategies. This article will walk through practical examples of using Copilot to break down tasks and verify code correctness.

More infromation:
- [Writing tests with GitHub Copilot](https://docs.github.com/en/copilot/using-github-copilot/guides-on-using-github-copilot/writing-tests-with-github-copilot)

### Advaced techniques

More infromation:
- [Mastering GitHub Copilot for AI Paired Programming](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming)
- [Advanced Techniques for Optimal Development Efficiency](https://www.willowtreeapps.com/craft/unleashing-github-copilot-advanced-techniques-for-optimal-development-efficiency)

## Copilot Tips & Tricks

- [Prompt crafting advanced techniques](https://github.com/kierunb/CopilotCheatSheet/tree/master?tab=readme-ov-file#prompt-crafting)
    - 3S Principle of Prompt Engineering
    - Break complex tasks into simpler tasks
    - Give GitHub Copilot an example or two
        - One-shot/Few-shot
    - Indicate relevant code
    - Experiment and iterate with your prompts
    - Keep history relevant
    - Q&A Strategy Prompt
    - Pros and Cons Prompt
    - Stepwise Chain of Thought Prompt
    - Role Prompt
    - More prompt samples

More infromation:
- [Using GitHub Copilot in your IDE: Tips, tricks, and best practices](https://github.blog/developer-skills/github/how-to-use-github-copilot-in-your-ide-tips-tricks-and-best-practices/)
- [Best practices for using GitHub Copilot in VS Code](https://code.visualstudio.com/docs/copilot/prompt-crafting)
- [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/developer-skills/github/how-to-write-better-prompts-for-github-copilot/)
- [10 unexpected ways to use GitHub Copilot](https://github.blog/developer-skills/programming-languages-and-frameworks/10-unexpected-ways-to-use-github-copilot/)

## Building Copilot Extensions

Copilot Extensions are integrations that expand the functionality of Copilot Chat, allowing developers to bring external tools, services, and custom behaviors into the Chat experience. You can use Copilot Extensions to extend the capabilities of Copilot Chat in a variety of ways, including:

- Querying documentation: A Copilot Extension can allow Copilot Chat to query a third-party documentation service to find information about a specific topic.
- AI-assisted coding: A Copilot Extension can use a third-party AI model to provide code suggestions.
- Data retrieval: A Copilot Extension can allow Copilot Chat to query a third-party data service to retrieve information about a specific topic.
- Action execution: A Copilot Extension can allow Copilot Chat to execute a specific action, such as posting to a message board or updating a tracking item in an external system.

More infromation:
- [About building Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)

## Hands-on labs in Codespaces

- [Introduction to GitHub Copilot](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/03-Introduction-to-GitHub-Copilot/README.md)
- [Using GitHub Copilot with JavaScript](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/04-Using-GitHub-Copilot-with-JavaScript/README.MD)
- [Using GitHub Copilot with Python](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/05-Using-GitHub-Copilot-with-Python/README.md)
- [Using GitHub Copilot with C#](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/06-Using-GitHub-Copilot-with-CSharp/README.md)
- [Creating a Mini Game with GitHub Copilot](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/07-Creating-Mini-Game-with-GitHub-Copilot/README.md)
- [Using Advanced GitHub Copilot Features](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/08-Using-Advanced-GitHub-Copilot-Features/README.md)

## Reference

- [Getting started with prompts for Copilot Chat](https://docs.github.com/en/copilot/using-github-copilot/guides-on-using-github-copilot/getting-started-with-prompts-for-copilot-chat)
- [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- [GitHub Copilot CheatSheet](https://github.com/kierunb/CopilotCheatSheet)
- [Awesome GitHub Copilot](https://github.com/program247365/awesome-github-copilot)
- [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)
- [GitHub Copilot Chat extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat)

## Labs

Copilot Hands-on labs:
- [Introduction to GitHub Copilot](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/03-Introduction-to-GitHub-Copilot/README.md)
- [Using GitHub Copilot with JavaScript](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/04-Using-GitHub-Copilot-with-JavaScript/README.MD)
- [Using GitHub Copilot with Python](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/05-Using-GitHub-Copilot-with-Python/README.md)
- [Using GitHub Copilot with C#](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/06-Using-GitHub-Copilot-with-CSharp/README.md)
- [Creating a Mini Game with GitHub Copilot](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/07-Creating-Mini-Game-with-GitHub-Copilot/README.md)
- [Using Advanced GitHub Copilot Features](https://github.com/microsoft/Mastering-GitHub-Copilot-for-Paired-Programming/blob/main/08-Using-Advanced-GitHub-Copilot-Features/README.md)
- [Activate GitHub Copilot to become more efficient - .NET](https://moaw.dev/workshop/github-copilot/)
- [Enhance Your Efficiency with GitHub Copilot: A Workshop - Java](https://moaw.dev/workshop/github-copilot-java/)
- [Using GitHub Copilot to quickly build a Node.js application with Azure Cosmos DB and App Service](https://moaw.dev/workshop/gh:azure-samples/copilot-nodejs-todo/main/docs/)

Sample .NET apps for Copilot experiments:
- [TodoApp](https://github.com/davidfowl/TodoApp)
- [TodoAppBlazorServer](https://github.com/claudiobernasconi/TodoAppBlazorServer)