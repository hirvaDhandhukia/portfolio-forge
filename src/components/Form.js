import React from 'react'
import FormGroup from './Bootstrap/FormGroup'

const Form = ({ FormData, onChange }) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name."
    ],
    FirstName: [
      "text",
      "First Name",
      "Please enter your first name."
    ],
    LastName: [
      "text",
      "Last Name",
      "Please entr your surname."
    ],
    Description: [
      "text",
      "About you",
      "Write a short introduction/description about you"
    ],
    KeyWords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use."
    ],
    Thumbnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN (Ex. Imgur) and paste the Direct Image URL here."
    ],
    URL: [
      "text",
      "This website's link",
      "Enter a URL to your website, where this page is going to be hosted."
    ],
    Address: [
      "text",
      "Where do you live?",
      "Enter your full address for reference of recruiters."
    ],
    Occupation: [
      "text",
      "Current position/occupation at a company",
      "Describe your current occupation briefely."
    ],
    Email: [
      "email",
      "Email Address",
      "Please enter your primary email address."
    ],
    Github: [
      "text",
      "GitHub profile link",
      "Please provide your github profile link"
    ],
    LinkedIn: [
      "text",
      "LinkedIn profile",
      "Please provide your LinkedIn profile link"
    ],

  };

  return (
    <div className='Form'>
        <h3>Basic Info</h3>
        <p>
            {Object.keys(FormData).map(
                fd => (
                  // <FormGroup key={fd} Label={fd} />
                  Object.keys(Desc).includes(fd) && (
                      <FormGroup 
                        key={fd} 
                        // Label={[fd][1]} 
                        Label={fd}
                        Type={Desc[fd][1]}
                        Id={fd}
                        Desc={Desc[fd][2]}
                        Value={FormData[fd]}
                        // Placeholder={`Enter ${Desc[fd][1]}`}
                        onChange={fd === 'FullName' ? () => {} : onChange}
                        readOnly={fd === 'FullName' ? true : undefined}
                      />
                  )
              ))}
        </p>

        {/* <h3>Experience</h3>
        <p>
            <Experience />
        </p>

        <h3>Education</h3>
        <p>
            <Experience />
        </p> */}

        <h3>Skills</h3>
        <pre>
          {JSON.stringify(FormData.Skills, null, 2)}
        </pre>

        <h3>Interests</h3>
        <pre>
          {JSON.stringify(FormData.Interests, null, 2)}
        </pre>

        
    </div>
  );
};

export default Form;