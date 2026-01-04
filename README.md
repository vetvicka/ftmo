## todos:

- missing font - could be added as a custom font to match the figma design
- icons for links and buttons. There is a placeholder space left out it the layout.
- Maybe some more CSS pre-processing tools to help with the hardcoded media queries.
- Some utility packages should be added if this repo is growing, for classnames and others.
  Given the limited scope of the demo, keeping it vanilla-like is OK.
- i18n, properly formatting the currency values. At this point the mocks don't include the information about currency. USD can be assumed for the demo.
- The whole data fetching is good enough for the mocks. In real app this would be handled in whatever way the app is doing data fetching.
- The "visible" Switch button is imported from material UI, which was close enough to the intended design and it seemed better then to leave it out of scope. Generally I would avoid using "random" labraries like this. Unless its a core dependency of the project.
- Not sure what the intention behind the visible toggle is. If the card is collapsed by default. It could be reasonable to fetch the chart data only when needed. And maybe don't even render the body of the card unless needed. Depends...
- accessibility, proper buttons, hover states, analytics, better error handling etc...
- tests - in the limited time I focused on the components and layout and getting close to the Figma designs. For this kind of component I would not add too many unit tests - though, I would unit test anything that touches the money values. The Pnl calculation, chart data tranformation and the i18n/formatter that displays the currency values on screen. More important seems E2E tests with visual regression checks.

mock APIS:

- https://mock-api.net/api/ftmo/account
- https://mock-api.net/api/ftmo/balancecurve
