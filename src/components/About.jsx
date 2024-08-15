// import React, { useState } from 'react';

// function About() {
//   const [styles, setStyle] = useState({
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//       backgroundColor: '#f4f4f4',
//       padding: '0 20px',
//       color: 'black',
//     },
//     heading: {
//       fontSize: '2.5rem',
//       margin: '20px 0',
//     },
//     paragraph: {
//       fontSize: '1.2rem',
//       textAlign: 'center',
//       maxWidth: '600px',
//       lineHeight: '1.5',
//     },
//   });

//   const toggleStyle = () => {
//     if (styles.container.backgroundColor === '#f4f4f4') {
//       setStyle((prevStyles) => ({
//         ...prevStyles,
//         container: {
//           ...prevStyles.container,
//           color: 'white',
//           backgroundColor: '#262626',
//         },
//       }));
//     } else {
//       setStyle((prevStyles) => ({
//         ...prevStyles,
//         container: {
//           ...prevStyles.container,
//           color: 'black',
//           backgroundColor: '#f4f4f4',
//         },
//       }));
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.heading}>About Us</h1>
//       <p style={styles.paragraph}>
//         We are a passionate team dedicated to delivering the best experience for our users. Our mission is to provide top-notch services and create meaningful connections.
//       </p>
//       <button onClick={toggleStyle}>Change</button>
//     </div>
//   );
// }

// export default About;


import React, { useState } from 'react';

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleStyle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: isDarkMode ? '#262626' : '#f4f4f4',
      color: isDarkMode ? 'white' : 'black',
      padding: '0 20px',
    },
    heading: {
      fontSize: '2.5rem',
      margin: '20px 0',
    },
    paragraph: {
      fontSize: '1.2rem',
      textAlign: 'center',
      maxWidth: '600px',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        We are a passionate team dedicated to delivering the best experience for our users. Our mission is to provide top-notch services and create meaningful connections.
      </p>
      <button onClick={toggleStyle}>Change</button>
    </div>
  );
}

export default About;
