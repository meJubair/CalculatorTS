// App.tsx
import React from 'react';
import Calculator from './components/Calculator.tsx';

const App: React.FC = () => {
    return (
        <> {/* div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} */}
            <Calculator />
        </>
    );
};

export default App;
