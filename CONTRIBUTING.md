# Contributing to React View Observer

Thank you for your interest in contributing to React View Observer! This document provides guidelines and steps for contributing.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How to Contribute

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots and animated GIFs if possible
* Include any relevant code snippets

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* A clear and descriptive title
* A detailed description of the proposed functionality
* Explain why this enhancement would be useful
* List any alternative solutions or features you've considered

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the JavaScript/React styleguides
* End all files with a newline

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/react-load-on-view.git
cd react-load-on-view
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and test them:
```bash
npm run build
# or
yarn build
```

5. Commit your changes:
```bash
git commit -m 'Add some feature'
```

6. Push to the branch:
```bash
git push origin feature/your-feature-name
```

7. Open a Pull Request

## Code Style Guide

### JavaScript/React Style Guide

* Use 2 spaces for indentation
* Use semicolons at the end of statements
* Use single quotes for strings
* Use const/let instead of var
* Use arrow functions when possible
* Use meaningful variable and function names
* Add JSDoc comments for functions and components
* Keep functions small and focused
* Use destructuring when possible

### Example

```javascript
// Good
const MyComponent = ({ prop1, prop2 }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Effect logic
  }, []);

  return <div>{prop1}</div>;
};

// Bad
function MyComponent(props) {
  var state = null;
  
  useEffect(function() {
    // Effect logic
  }, []);
  
  return <div>{props.prop1}</div>;
}
```

### Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
    * 🎨 `:art:` when improving the format/structure of the code
    * 🐎 `:racehorse:` when improving performance
    * 🚱 `:non-potable_water:` when plugging memory leaks
    * 📝 `:memo:` when writing docs
    * 🐛 `:bug:` when fixing a bug
    * 🔥 `:fire:` when removing code or files
    * 💚 `:green_heart:` when fixing the CI build
    * ✅ `:white_check_mark:` when adding tests
    * 🔒 `:lock:` when dealing with security
    * ⬆️ `:arrow_up:` when upgrading dependencies
    * ⬇️ `:arrow_down:` when downgrading dependencies

## Testing

* Write tests for new features
* Ensure all tests pass before submitting PR
* Include both unit and integration tests when appropriate

## Documentation

* Update the README.md with details of changes to the interface
* Update the CHANGELOG.md with a note describing your changes
* Add JSDoc comments for new functions and components
* Update any relevant documentation

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create a new release on GitHub
4. Tag the release
5. Publish to npm

## Questions?

Feel free to open an issue for any questions or concerns you might have.

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License. 