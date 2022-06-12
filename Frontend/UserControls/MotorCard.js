

class MotorCard{

    static IsVideoMuted = true; // Represents the state of sound of the video of this motor is muted or not. (Default value is true)
    MotorType; // Represents type of this motor
    MotorCardDiv; // Represents this MotorCard UI (div element)
    TitleDiv; // Represents title div of this motor card

    
    static IsMouseEntered = false; // Represents the state of the mouse has entered and has not left yet a motor card.
    static IsLocked = false;
    // static CurrentFocusedMotorType = "";
    static GrowRate = [0.8, 0.25];
    static FocusedMotorCard;


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
            case "I Motor": motorImage.src = "Resources/MotorResources/IMotor/0.png" ; break;
            case "W Motor": motorImage.src = "Resources/MotorResources/WMotor/0.png" ; break;
            case "Opposite Motor": motorImage.src =  'Resources/MotorResources/OppositeMotor/0.png'; break;
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
        case "I Motor": gif.src =  'Resources/MotorResources/IMotor/0.gif'; break;
        case "W Motor": gif.src =  'Resources/MotorResources/WMotor/0.gif'; break;
        case "Opposite Motor": gif.src =  'Resources/MotorResources/OppositeMotor/0.gif'; break;
        case "A Motor": gif.src =  'Resources/MotorResources/AMotor/0.gif'; break;
        case "B Motor": gif.src =  'Resources/MotorResources/BMotor/0.gif'; break;
        case "C Motor": gif.src =  'Resources/MotorResources/CMotor/0.gif'; break;
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
   if (MotorCard.IsMouseEntered || MotorCard.IsLocked) {return;}
  MotorCard.IsLocked = true;
  MotorCard.IsMouseEntered = true;
  if (MotorCard.FocusedMotorCard != null && MotorCard.FocusedMotorCard.MotorType != this.MotorType)
  {
   // console.log("UNSAFE 33 DETECTED. Old: " + MotorCard.FocusedMotorCard.MotorType + " Now: " + this.MotorType);
    MotorCard.FocusedMotorCard.MotorCard_MouseLeft();
  }
  MotorCard.FocusedMotorCard = this;

   //console.log(this.MotorType + " ENTERING");

    let This = this;
    let timeOut = setTimeout(function(){
        if (!MotorCard.IsMouseEntered)
        {
           // console.log("UNSAFE DETECTED");
            clearTimeout(timeOut);
            timeOut = null;
            return;
        }
        if ( MotorCard.FocusedMotorCard != null && MotorCard.FocusedMotorCard.MotorType != This.MotorType)
        {
          //  console.log("UNSAFE 22 DETECTED");
            clearTimeout(timeOut);
            timeOut = null;
            return;
        }
      //  console.log(This.MotorType + " ENTERED");
        let [widthRate, heightRate] = MotorCard.GrowRate;
        This.MotorCardDiv.style.transition = "width 700ms ease-in 100ms, height 700ms ease-in 100ms";
        This.MotorCardDiv.style.width = ((This.MotorCardDiv.offsetWidth + 6) * (widthRate + 1)) + "px";
        This.MotorCardDiv.style.height = ((This.MotorCardDiv.offsetHeight + 6) * (heightRate + 1)) + "px";
     
        let video = document.createElement('video'); // Creating the video object to display
        switch(This.MotorType) 
        {
            case "Boxer Motor": video.src =  'Resources/MotorResources/BoxerMotor/0.mp4'; video.type = 'video/mp4';break;
            case "V Motor": video.src =  'Resources/MotorResources/VMotor/0.mp4'; video.type = 'video/mp4';break;
            case "I Motor": video.src =  'Resources/MotorResources/IMotor/0.mp4'; video.type = 'video/mp4';break;
            case "W Motor": video.src =  'Resources/MotorResources/WMotor/0.mp4'; video.type = 'video/mp4';break;
            case "Opposite Motor": video.src =  'Resources/MotorResources/OppositeMotor/0.mp4'; video.type = 'video/mp4'; break;
            case "A Motor": video.src =  'Resources/MotorResources/AMotor/0.mp4'; video.type = 'video/mp4';break;
            case "B Motor": video.src =  'Resources/MotorResources/BMotor/0.mp4'; video.type = 'video/mp4';break;
            case "C Motor": video.src =  'Resources/MotorResources/CMotor/0.mp4'; video.type = 'video/mp4';break;
            default: break;
        }
        video.muted = MotorCard.IsVideoMuted;
        video.loop = true;
        // video.autoplay = true;
        video.addEventListener("loadeddata", function(){
            if (!MotorCard.IsMouseEntered) {return;}
            This.VideoLoaded(video);
        });
        video.load();

        clearTimeout(timeOut);
        timeOut = null;

        MotorCard.IsLocked = false;

    }, 200);


    
}

// Runs whenever the mouse leaves any motor card area
MotorCard_MouseLeft(){
    // I will display the motor photo and remove the car video and unmute/mute button.
    MotorCard.IsLocked = true;
    
  //  console.log(this.MotorType + " LEAVING");

    let [widthRate, heightRate] = MotorCard.GrowRate;
    this.MotorCardDiv.style.transition = "width 0ms ease-in 0ms, height 0ms ease-in 0ms";
    this.MotorCardDiv.style.width = ((this.MotorCardDiv.offsetWidth - 6) / (widthRate + 1)) + "px";
    this.MotorCardDiv.style.height = ((this.MotorCardDiv.offsetHeight - 6) / (heightRate + 1)) + "px";
  

    this.MotorCardDiv.children[0].remove(); // Removing the current motor video div.
    
    let motorImage = document.createElement('img');
        switch(this.MotorType)
        {
            case "Boxer Motor": motorImage.src = "Resources/MotorResources/BoxerMotor/0.png" ; break;
            case "V Motor": motorImage.src = "Resources/MotorResources/VMotor/0.png" ; break;
            case "I Motor": motorImage.src = "Resources/MotorResources/IMotor/0.png" ; break;
            case "W Motor": motorImage.src = "Resources/MotorResources/WMotor/0.png" ; break;
            case "Opposite Motor": motorImage.src =  'Resources/MotorResources/OppositeMotor/0.png'; break;
            case "A Motor": motorImage.src = "Resources/MotorResources/AMotor/0.png" ; break;
            case "B Motor": motorImage.src = "Resources/MotorResources/BMotor/0.png" ; break;
            case "C Motor": motorImage.src = "Resources/MotorResources/CMotor/0.png" ; break;
            default: break;
        }

    this.MotorCardDiv.insertBefore(motorImage, this.TitleDiv);
    
 //   console.log(this.MotorType + " LEFT");
    MotorCard.IsMouseEntered = false;
    MotorCard.IsLocked = false;
    MotorCard.FocusedMotorCard = null;


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
