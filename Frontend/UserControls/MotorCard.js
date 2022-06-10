class MotorCard{

    static IsVideoMuted = true; // Represents the state of sound of the video of this motor is muted or not. (Default value is true)
    MotorType; // Represents this motor's type.
    MotorCardDiv;
    TitleDiv;

    constructor(motorType){
        this.MotorType = motorType;
        // Creating a motor card (user control)
        // All other properties are set from the MotorCard.css
        
        this.MotorCardDiv = document.createElement('div');
        this.MotorCardDiv.className = "MotorCard";
        this.MotorCardDiv.title = this.MotorType;
        this.MotorCardDiv.addEventListener("mouseenter", this.MotorCard_MouseEnter); 
        this.MotorCardDiv.addEventListener("mouseleave", this.MotorCard_MouseLeft); 
        
        let motorImage = document.createElement('img');
        switch(this.MotorType)
        {
            case "Boxer Motor": motorImage.src = "Resources/MotorResources/BoxerMotor/1.png" ; break;
            default: break;
        }

        TitleDiv = document.createElement('div');
        this.TitleDiv.addEventListener("mouseenter", this.MotorCardTitle_MouseEntered);
        this.TitleDiv.addEventListener("mouseleave", this.MotorCardTitle_MouseLeft);

        let titleText = document.createElement('B');
        titleText.innerHTML = this.MotorType;

        this.TitleDiv.appendChild(titleText);
        this.MotorCardDiv.appendChild(motorImage);
        this.MotorCardDiv.appendChild(this.TitleDiv);
    }


// Events:

// Runs whenever the mouse enters any Motor Title's div's area.
MotorCardTitle_MouseEntered(){
    // I will display the relevant gif and remove the title text.

    let gif = document.createElement('img'); // Creating img object to display the GIF
    
    switch(motorType) 
    {
        case "BoxerMotor": gif.src =  'Resources/MotorResources/BoxerMotor/0.gif'; break;
        default: break;
    }

    // Removing the current title text.
    this.TitleDiv.children[0].remove();
    this.TitleDiv.appendChild(gif); // Adding gif image to the title area.
    
}

// Runs whenever the mouse leaves any Motor Title's div's area.
MotorCardTitle_MouseLeft(){
    // I will display the title of the motor type and remove the gif.

    // first child of title div is gif element.
    // Removing the gif.
    sender.children[0].remove();
    let title = document.createElement('B'); // Creating b object to display the title
    title.innerHTML = motorType;

    this.TitleDiv.appendChild(title); // Adding title to the sender area.
    
}

// Runs whenever the mouse enters any motor card area
MotorCard_MouseEnter(){
    // I will remove the motor photo and display the car video and unmute/mute button.

    this.MotorCardDiv.children[0].remove(); // Removing the current motor image.

    let videoDiv = document.createElement('div');
    videoDiv.id = "VideoDiv";

    let video = document.createElement('video'); // Creating the video object to display
    switch(motorType) 
    {
        case "BoxerMotor": video.src =  'Resources/MotorResources/BoxerMotor/0.mp4'; video.type = 'video/mp4';break;
        default: break;
    }
    video.muted = MotorCard.IsVideoMuted;

    let muteButton = document.createElement('button');
    muteButton.addEventListener("click", MuteButton_Clicked);
    muteButton.title = "Sesi açmak veya kapatmak için buraya basin";

    videoDiv.appendChild(video);
    videoDiv.appendChild(muteButton);

    this.MotorCardDiv.insertBefore(videoDiv, this.TitleDiv);

}

// Runs whenever the mouse leaves any motor card area
MotorCard_MouseLeft(){
    // I will display the motor photo and remove the car video and unmute/mute button.

    this.MotorCardDiv.children[0].remove(); // Removing the current motor video div.

    let motorImage = document.createElement('img');
        switch(this.MotorType)
        {
            case "Boxer Motor": motorImage.src = "Resources/MotorResources/BoxerMotor/1.png" ; break;
            default: break;
        }

    this.MotorCardDiv.insertBefore(motorImage, this.TitleDiv);

}

// Runs whenever the mouse clicks the mute/unmute the video button.
MuteButton_Clicked(){
    // Changing mute option.
    MotorCard.IsVideoMuted = !MotorCard.IsVideoMuted;
    // this.MotorCardDiv.children[0].children[0] -> video
    this.MotorCardDiv.children[0].children[0].muted = MotorCard.IsVideoMuted;
    // this.MotorCardDiv.children[0].children[1] -> unmute/mute button
    this.MotorCardDiv.children[0].children[1].style.backgroundImage =  MotorCard.IsVideoMuted ? "url('/Resources/Icons/Unmute32.png')" : "url('/Resources/Icons/Mute32.png')";

}

}
