import "./App.css";
import Resume from "./assets/components/Resume";

// Accessibility features:
//   - Sections of the page should be marked up as semantic HTML elements
//     (e.g., <header>, <main>, <footer>)
//   - All interactive elements should have an accessible label
//     (e.g., <button aria-label="Open menu">Menu</button>)
//   - All interactive elements should have a visible focus state
//   - All interactive elements should have appropriate keyboard support
//     (e.g., press 'Enter' to activate a button)
//   - All interactive elements should have appropriate screen reader support
//   - All text content should be readable against a white background
//   - All interactive elements should have a sufficient contrast ratio
//   - Include appropriate alt text for images and other multimedia
//   - Include appropriate captions for multimedia
//   - Provide a mechanism for users to skip to main content
//   - Provide a mechanism for users to navigate the page by heading
//   - Provide a mechanism for users to navigate the page by landmark
//   - Provide a mechanism for users to navigate the page by landmark
//   - Provide a mechanism for users to set text size
//   - Provide a mechanism for users to set text color
//   - Provide a mechanism for users to set background color
//   - Provide a mechanism for users to set high contrast mode
//   - Provide a mechanism for users to set line spacing
//   - Provide a mechanism for users to set font family
//   - Provide a mechanism for users to set bionic reading mode

function App() {
  return (
    <>
      <header>
        <h1>Hello, World!</h1>
      </header>
      <main>
        <Resume />
      </main>
    </>
  );
}

export default App;
