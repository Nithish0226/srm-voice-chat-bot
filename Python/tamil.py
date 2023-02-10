import speech_recognition as sr
from gtts import gTTS 
from audioplayer import AudioPlayer
#import os
import pyttsx3

i=1
def SpeakText(command):
	engine = pyttsx3.init()
	engine.say(command)
	engine.runAndWait()

def tamil(snk):
    myobj = gTTS(text=snk, lang="ta", slow=False)
    myobj.save("welcome.mp3")
    AudioPlayer("welcome.mp3").play(block=True)
    #os.system("welcome.mp3")
    
r=sr.Recognizer()
tamil("வணக்கம். நான் உங்களுக்கு எப்படி உதவ முடியும்?")
print("வணக்கம். நான் உங்களுக்கு எப்படி உதவ முடியும்?")
while True: 
        
    with sr.Microphone()as source:
        r.adjust_for_ambient_noise(source)
        print("பேசுங்கள்")
        i=1
        audio=r.listen(source)
        print("கேட்கிறது ....")
        try:
               text = r.recognize_google(audio,language="ta-IN")
        except sr.RequestError:
               SpeakText("நெட்வொர்க் பிழை")
               print("")
               text=""
               i=0
        except sr.UnknownValueError:
               tamil("ஒலி தெளிவாக இல்லை")
               print("ஒலி தெளிவாக இல்லை")
               text=""
               i=0
        print("நீங்கள் சொன்னீர்கள் "+text)
        if(text=="எஸ்ஆர்எம்மில் எப்படி விண்ணப்பிக்க வேண்டும்"):
            tamil("விண்ணப்பதாரர் எங்கள் வலைத்தளத்தைப் பார்வையிட்டு ஆன்லைனில் விண்ணப்பிக்கலாம் மற்றும் ஆன்லைனில் கிடைக்கும் விண்ணப்பப் படிவத்தை நிரப்பவும்: http://admissions.srmuniversity.ac.in")
            print("விண்ணப்பதாரர் எங்கள் வலைத்தளத்தைப் பார்வையிட்டு ஆன்லைனில் விண்ணப்பிக்கலாம் மற்றும் ஆன்லைனில் கிடைக்கும் விண்ணப்பப் படிவத்தை நிரப்பவும்: http://admissions.srmuniversity.ac.in")
            i=0
        if(text=="சேர்க்கை தேவைகள் என்ன?"):
            tamil("ஒரு வேட்பாளர் அந்தந்த ஆர்வமுள்ள திட்டத்திற்கான தகுதி அளவுகோல்களை பூர்த்தி செய்ய வேண்டும். சேர்க்கை பெற விரும்பும் நேரத்தில் ஒருவர் தேவையான ஆவணங்களை சமர்ப்பிக்க வேண்டும்")
            print("ஒரு வேட்பாளர் அந்தந்த ஆர்வமுள்ள திட்டத்திற்கான தகுதி அளவுகோல்களை பூர்த்தி செய்ய வேண்டும். சேர்க்கை பெற விரும்பும் நேரத்தில் ஒருவர் தேவையான ஆவணங்களை சமர்ப்பிக்க வேண்டும்")
            i=0
        #if(text==""):
            #tamil("")
           # print("")
            #i=0
        if(text=="வெளியேறு"):
            tamil("நன்றி")
            print("நன்றி")
            break
        if(i==1):
              tamil("மீண்டும் கூறு")
