# React Router Color Factory

This application allows users to view and add colors using React Router. Users can view a list of available colors, see individual color details, and add new colors through a form.

## Technologies

- React.js, react-router-dom, MUI, react-color, ColorPicker

## User Stories

1. **View Colors**:

   - Access the `/colors` route to see a list of available colors.

2. **View Individual Color**:

   - Click on a color from the colors list to view detailed information about that color.
   - The route for individual color details should be `/colors/:color`.

3. **Add New Color**:

   - Click on a button to display a form for adding a new color.
   - The route for adding a new color should be `/colors/new`.

4. **Submit New Color**:

   - After submitting the new color form, the user is redirected to the colors index, and the new color appears at the top.

5. **Invalid Color Page Redirect**:

   - If attempting to navigate to a color page that doesn't exist (e.g., `/colors/nope`), the user is redirected to the colors index page.

6. **Invalid URL Redirect**:
   - When trying to navigate to an invalid URL (e.g., `/this-is-not-valid`), the user is redirected to the colors index page.

## Setup and Usage

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-router-color-factory.git
   ```

## Install dependencies

```
cd react-router-color-factory
npm install
```

## Start App:

`npm run dev`
