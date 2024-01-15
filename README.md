# Harry's Magical Jump Quest

Welcome to Harry's Magical Jump Quest, an enchanting game set in the magical world of Harry Potter! Immerse yourself in a thrilling adventure where you guide Harry to jump over Dobby and answer quizzes to earn points.

## Site Owner Goals

- To provide users with a captivating and entertaining gaming experience in the magical world of Harry Potter.
- To integrate quiz challenges to enhance user knowledge about the Harry Potter series through engaging gameplay.
- To implement a scoring mechanism to reward users for their skills and knowledge.
- To connect Harry Potter fans, encouraging them to share game experiences and achievements.

## User Stories

- ### First time use
  - As a first-time player, I want to quickly grasp the game's objective and the excitement of jumping over obstacles in the magical world of Harry Potter.
  - As a first-time player, I want an intuitive and enjoyable gameplay experience without the need for complex instructions.
  - As a first-time player, I want to dive into the game immediately without the requirement to sign up.
- ### Returning User
  - As a returning player, I want to seamlessly navigate through the game to relive the magical experience of guiding Harry through challenges.
  - As a returning player, I want to be able to learn more knowledge about the Harry potter movies
- ### Frequent user
  - As a frequent user I want to be able to master the art of timing Harry's jumps over Dobby
  - As a frequent user I want to be able to Celebrate success in the quiz phase by answering questions correctly

## Design

### Imagery
The Marauder's Map forms the backdrop, while the majestic Hogwarts Castle silhouette serves as the overall game background.

### Colours
The color scheme includes a dark background, inspired by the Marauder's Map, with warm tones of orange for buttons, creating a visually appealing contrast. White text ensures visibility against the intricate details of the map and castle.

### Fonts
The use of Google Fonts, specifically 'Cinzel Decorative' for headings and 'Merienda' for body text, enhances the magical and whimsical feel of the game.

## Features
### Home page 
  the landing page of the website has a simple layout witck includes a H1 that says "Harry's Magical Jump Quest." Players are aslo greeted with a "Start Game" button, initiating the mystical quest.

### Gameplay
  - Control Harry's movements with a simple click.
  - Score points as Harry successfully jumps over Dobby. Survive for more than 10 seconds to trigger a quiz challenge and earn additional rewards.

### Quiz Challenges
  - Test your Harry Potter knowledge with engaging quiz challenges.
  - Answer correctly to earn points and progress further in the game.

### Game over
Restarts the game after a loss, providing players with the opportunity to continue their magical journey and improve their performance.

### Features Left to Implement
- A scoreboard
- Some harry potter music

### Validator Testing

- #### HTML
  - No errors were returned when passing through the official W3C Markup Validator
    - [W3C Validator Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fantonei.github.io%2FHarry-Potter-game%2F)

- #### CSS
  - No errors were found when passing through the official W3C CSS Validator
    - [W3C CSS Validator Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fantonei.github.io%2FHarry-Potter-game%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv)

- #### Javascript
  - No errors or warnings were returned when passing through the the [JSHint Validator](https://jshint.com/)
![JSHint Validator Results]()

### Accessibility

- The site achieved a Lighthouse accessibility score of 100% on both mobile and desktop which confirms that the colours and fonts chosen are easy to read and accessible

Mobile Lighthouse Score

![Mobile Lighthouse Score](docs/readme_images/mobile_lighthouse.png)

Desktop Lighthouse Score

![Desktop Lighthouse Score](docs/readme_images/desktop_lighthouse.png)

### Button Testing

-All buttons, including the Start button and the answer buttons in the quiz section, have been manually tested. They direct the user to the correct sections of the game.

### Game Mechanics Testing

- The game mechanics have been thoroughly tested to ensure a seamless and enjoyable user experience. Key aspects include:
  - Harry's Jumping Mechanism: Checked to ensure Harry jumps over Dobby correctly.
  - Dobby's Movement: Verified that Dobby moves towards Harry as expected.
  - Score Tracking: Ensured the scoring system increments correctly when Harry successfully jumps over Dobby.
  - Quiz Integration: Validated that the quiz section triggers when the user accumulates a certain score.
  - Quiz Questions: Confirmed that quiz questions are displayed randomly and that the correct answer progresses the game.
  - Game Over Handling: Checked that the game responds appropriately when Harry is hit by Dobby or when a wrong quiz answer is selected.

### Responsive Design

- The game has been tested across different screen sizes to ensure a responsive and visually appealing layout. Media queries have been implemented to adapt the game elements for a better user experience on various devices.

  - [Responsinator](http://www.responsinator.com/?url=https%3A%2F%2Fantonei.github.io%2FHarry-Potter-game%2F)

### Fixed Bugs