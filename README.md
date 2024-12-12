# Widget Management App

A Vue 3 application designed for managing widgets with customizable properties such as colors, actions, and activation states. This project uses Vuex for state management and Axios for API calls.

## **Features**

- Display and manage a list of widgets.
- Change widget colors dynamically.
- Activate a single widget while deactivating others.
- Link widgets to a public profile.
- Fully responsive design using Tailwind CSS.
- Custom toggle switches and color pickers.

## **Technologies Used**

- **Vue 3**: For building the user interface.
- **Vuex**: For state management.
- **Axios**: For making API requests.
- **Tailwind CSS**: For styling.
- **TypeScript**: For type safety and better development experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EbrahimMozaffari/greenspark.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit http://localhost:5173

## Deployment

- To build the application for production:

  ```bash
  npm run build
  ```

## Code Structure

- **src/components**: Contains Vue components such as CustomInput and CustomIcon.
- **src/stores**: Vuex store for state management.
- **src/services**: Axios client and API services.
- **src/assets**: Static assets like images or icons.

```bash
        src/
        ├── components/        # Reusable components
        ├── store/             # Pinia store for managing global state
        ├── router/            # Routing
        ├── pages/             # Pages component
        ├── types/             # Define your types here
        ├── services/          # Define  api
        ├── assets/            # Static files (images, icons, etc.)
        ├── styles/            # Global and scoped CSS files
        └── App.vue
```

## How It Works

### Widget Management

- Each widget is displayed with its type, action, and color.
  **Users can** :
- Change colors via a color picker.
- Activate or deactivate widgets using toggle switches.
- Link widgets to a public profile.

### State Management

**Vuex manages the widget data, with actions like**:

- **fetchWidgets**: Fetches the list of widgets from the API.
- **updateWidgetColor**: Updates a widget's color.
- **toggleActiveWidget**: Activates one widget and deactivates others.
- **updateWidgetLink**: Links/unlinks widgets to profiles.

## Contact

For questions or suggestions, contact:
Name: **Ebrahim Mozaffari**
Email: **ebrahim.mozaffari87@gmail.com**

## License

This project is sold as a template for personal or commercial use.  
The purchaser is free to modify, distribute, or use the code without any restrictions.  
However, redistribution of this template to other markets is not permitted.

For more details, please refer to the [LICENSE.md](./LICENSE.md) file.
