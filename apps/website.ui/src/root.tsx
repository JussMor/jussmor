import { component$, useContextProvider, useStore, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';
import { ThemeProvider } from 'qwik-themes';

import globalStyles from './global.css?inline';


import {  modeOptions, 
          baseOptions, 
          borderRadiusOptions, 
          primaryOptions, 
          styleOptions, 
          fontOptions 
        } from './_states/make-it-yours';
import { APP_STATE_CONTEXT_ID } from './_states/app-state-context-id';
import { AppState } from './_states/app-state.type';

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  useStyles$(globalStyles);

    const appState = useStore<AppState>({
    featureFlags: {
      showStyled: true,
      showNeumorphic: import.meta.env.DEV,
    },
  });

  useContextProvider(APP_STATE_CONTEXT_ID, appState)

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          themes={[
            ...modeOptions,
            ...fontOptions,
            ...styleOptions,
            ...baseOptions,
            ...primaryOptions,
            ...borderRadiusOptions
          ]}
        >
          <RouterOutlet />
        </ThemeProvider>
      </body>
    </QwikCityProvider>
  );
});
