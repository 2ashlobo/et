# Expense Tracker App

A modern, responsive expense tracking application built with React. Track your daily expenses, categorize them, and view insightful statistics about your spending habits.

## Features

- **Add Expenses**: Easily add new expenses with description, amount, and category
- **Edit & Delete**: Modify or remove existing expenses
- **Categories**: Organize expenses into 8 different categories (Food, Transportation, Entertainment, etc.)
- **Statistics**: View total expenses, monthly spending, and top spending category
- **Local Storage**: Data persists between browser sessions
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations

## Categories

- Food
- Transportation
- Entertainment
- Shopping
- Healthcare
- Education
- Utilities
- Other

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```

## Usage

1. **Adding an Expense**:
   - Click the "Add Expense" button
   - Fill in the description, amount, and select a category
   - Click "Add Expense" to save

2. **Editing an Expense**:
   - Click the edit icon (pencil) next to any expense
   - Modify the details in the form
   - Click "Save" to update or "Cancel" to discard changes

3. **Deleting an Expense**:
   - Click the delete icon (trash) next to any expense
   - The expense will be permanently removed

4. **Viewing Statistics**:
   - Total expenses are displayed at the top
   - Current month spending is shown
   - Top spending category is highlighted

## Technologies Used

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **Lucide React**: Beautiful icons
- **date-fns**: Date formatting utilities
- **Local Storage**: Data persistence

## Project Structure

```
src/
├── components/
│   ├── Header.js          # App header with title
│   ├── ExpenseForm.js     # Form for adding expenses
│   ├── ExpenseList.js     # List of all expenses
│   └── ExpenseStats.js    # Statistics dashboard
├── App.js                 # Main application component
├── App.css               # App-specific styles
├── index.js              # Application entry point
└── index.css             # Global styles
```

## Features in Detail

### Data Persistence
All expenses are automatically saved to your browser's local storage, so your data will persist between sessions.

### Responsive Design
The app adapts to different screen sizes:
- Desktop: Full layout with side-by-side forms
- Tablet: Adjusted grid layouts
- Mobile: Single column layout with optimized spacing

### Category Colors
Each expense category has its own color for easy visual identification:
- Food: Red
- Transportation: Teal
- Entertainment: Blue
- Shopping: Green
- Healthcare: Yellow
- Education: Pink
- Utilities: Blue
- Other: Purple

### Form Validation
- All fields are required
- Amount must be greater than 0
- Description cannot be empty
- Real-time validation with user feedback

## Contributing

Feel free to fork this project and submit pull requests for any improvements or new features.

## License

This project is open source and available under the MIT License. 