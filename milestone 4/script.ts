// Importing Form and Display Area for our Resume 

const form = document.getElementById('dynamic-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Form Submission Handleing 

form.addEventListener ('submit', (event: Event ) => {
    event.preventDefault(); // prevents reloading of the page 

    //Collection of Input Values of the Form 

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //Generating Dynamic Resume Content 
    
    const resumeHTML = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>

    `;

    // Displaying after content generation of the Dynamic Resume 

    if(resumeDisplayElement) {
        resumeDisplayElement.innerHTML=resumeHTML;
    } else {
        console.error('Display Element Missing !!')
    }

})

