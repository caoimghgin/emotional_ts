import ReactDOM from 'react-dom/client';
import ThemeWrapper from './style/themes/ThemeWrapper';
import NewsKitThemeWrapper from './style/themes/NewsKitThemeWrapper';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeWrapper />
);

reportWebVitals();


// import ReactDOM from 'react-dom/client';
// import { NewsKitProvider, Tag, newskitLightTheme } from 'newskit';
// import reportWebVitals from './reportWebVitals';
// import './index.css';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
//   <NewsKitProvider theme={newskitLightTheme} >
//   <Tag
//     href="http://example.com"
//     size="medium">
//       Tag Content
//   </Tag>
// </NewsKitProvider>
// );

// reportWebVitals();