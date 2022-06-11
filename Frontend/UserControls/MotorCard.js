

class MotorCard{

    static IsVideoMuted = true; // Represents the state of sound of the video of this motor is muted or not. (Default value is true)
    MotorType; // Represents type of this motor
    MotorCardDiv; // Represents this MotorCard UI (div element)
    TitleDiv; // Represents title div of this motor card

    IsMouseEntered = false; // Represents the state of the mouse has entered and has not left yet this motor card.

    constructor(motorType){
   
        let This = this;

        this.MotorType = motorType;
        // Creating a motor card (user control)
        // All other properties are set from the MotorCard.css
        
        this.MotorCardDiv = document.createElement('div');
        this.MotorCardDiv.className = "MotorCard";
  
        this.MotorCardDiv.addEventListener("mouseenter", function() {
            This.MotorCard_MouseEnter();
        }); 
        this.MotorCardDiv.addEventListener("mouseleave", function(){
            This.MotorCard_MouseLeft();
        }); 

        
        let motorImage = document.createElement('img');
        switch(this.MotorType)
        {
            case "Boxer Motor": motorImage.src = "Resources/MotorResources/BoxerMotor/0.png" ; break;
            case "V Motor": motorImage.src = "Resources/MotorResources/VMotor/0.png" ; break;
            default: break;
        }

        this.TitleDiv = document.createElement('div');
        
        this.TitleDiv.addEventListener("mouseenter", function(){
            This.MotorCardTitle_MouseEntered();
        });
        this.TitleDiv.addEventListener("mouseleave", function(){
            This.MotorCardTitle_MouseLeft();
        });


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
    
    switch(this.MotorType) 
    {
        case "Boxer Motor": gif.src =  'Resources/MotorResources/BoxerMotor/0.gif'; break;
        case "V Motor": gif.src =  'Resources/MotorResources/VMotor/0.gif'; break;
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
    this.TitleDiv.children[0].remove();
    let title = document.createElement('B'); // Creating b object to display the title
    title.innerHTML = this.MotorType;

    this.TitleDiv.appendChild(title); // Adding title to the sender area.
    
}

// Runs whenever the mouse enters any motor card area
MotorCard_MouseEnter(){
   // I will load the video
   if (this.IsMouseEntered) {return;}
   this.IsMouseEntered = true;

    let video = document.createElement('video'); // Creating the video object to display
    switch(this.MotorType) 
    {
        case "Boxer Motor": video.src =  'Resources/MotorResources/BoxerMotor/0.mp4'; video.type = 'video/mp4';break;
        case "V Motor": video.src =  'Resources/MotorResources/VMotor/0.mp4'; video.type = 'video/mp4';break;
        default: break;
    }
    video.muted = MotorCard.IsVideoMuted;
    video.loop = true;
    // video.autoplay = true;
    let This = this;
    video.addEventListener("loadeddata", function(){
        This.VideoLoaded(video);
    });
    video.load();
}

// Runs whenever the mouse leaves any motor card area
MotorCard_MouseLeft(){
    // I will display the motor photo and remove the car video and unmute/mute button.
    this.IsMouseEntered = false;

    this.MotorCardDiv.children[0].remove(); // Removing the current motor video div.

    let motorImage = document.createElement('img');
        switch(this.MotorType)
        {
            case "Boxer Motor": motorImage.src = "Resources/MotorResources/BoxerMotor/0.png" ; break;
            case "V Motor": motorImage.src = "Resources/MotorResources/VMotor/0.png" ; break;
            default: break;
        }

    this.MotorCardDiv.insertBefore(motorImage, this.TitleDiv);

}

// Runs whenever the motor video is loaded completely.
VideoLoaded(Video){
    // I will remove the motor photo and display the car video and unmute/mute button.

    let videoDiv = document.createElement('div');
    videoDiv.id = "VideoDiv";

    let muteButton = document.createElement('button');
    let This = this;
    muteButton.addEventListener("click", function(){
      //  MuteButton_Clicked();
      This.MuteButton_Clicked();
    });
    muteButton.title = "Sesi açmak veya kapatmak için buraya basin";
    muteButton.style.backgroundImage =  MotorCard.IsVideoMuted ? "url('Resources/Icons/Unmute32.png')" : "url('Resources/Icons/Mute32.png')";

    videoDiv.appendChild(Video);
    videoDiv.appendChild(muteButton);

    this.MotorCardDiv.children[0].remove(); // Removing the current motor image.
    this.MotorCardDiv.insertBefore(videoDiv, this.TitleDiv);

    Video.play();
}

// Runs whenever the mouse clicks the mute/unmute the video button.
MuteButton_Clicked(){
    // Changing mute option.

    MotorCard.IsVideoMuted = !MotorCard.IsVideoMuted;
    // this.MotorCardDiv.children[0].children[0] -> video
    this.MotorCardDiv.children[0].children[0].muted = MotorCard.IsVideoMuted;
    // this.MotorCardDiv.children[0].children[1] -> unmute/mute button
    this.MotorCardDiv.children[0].children[1].style.backgroundImage =  MotorCard.IsVideoMuted ? "url('Resources/Icons/Unmute32.png')" : "url('Resources/Icons/Mute32.png')";

}

}
