var images = ["https://upload.wikimedia.org/wikipedia/commons/b/b3/Maharani_Jind_Kaur.jpg","https://images.tribuneindia.com/cms/gall_content/2017/7/2017_7$largeimg23_Sunday_2017_021123470.jpg", "https://www.wikitree.com/photo.php/8/81/Hogg-1550-4.jpg" , "https://upload.wikimedia.org/wikipedia/commons/b/b4/Prince_Victor_Duleep_Singh%2C_1897.jpg", "https://lh3.googleusercontent.com/proxy/61ZnFmG362lQ2BVFXX0cFOb5AQO4kSpvb8VRjF5pSuSoVX7-qlYtPAyeuDZ7ZiIBaURscJuou3xoJbsON5e2CJda5JwG9ydtZ9EWlW-2pbpYqr2Wj_Hd8U11Z2Eb-4JPBBpS3sRfWIbuD1iWFM5bmKxbsZDsQUtOm65mttZZ4mOtdoRlTg", "https://upload.wikimedia.org/wikipedia/commons/5/53/Princess_Bamba_Duleep_Singh_at_her_debut%2C_Buckingham_Palace%2C_1894.png","https://upload.wikimedia.org/wikipedia/commons/6/6a/Catherine_Hilda_Duleep.jpg","https://upload.wikimedia.org/wikipedia/commons/3/3e/1910-Sophia-Suffragette-Duleep-Singh-fixed.jpg","https://upload.wikimedia.org/wikipedia/commons/6/6a/Catherine_Hilda_Duleep.jpg","https://64.media.tumblr.com/0ecfbaa81690a8a38f13ceaaa417822b/a2985cbb9e146ab1-57/s1280x1920/8ebb8d4c5854d00a7d51cf3bbf3da53d1bb708dd.jpg"];
var names = ["Maharani Jind Kaur", "Maharaja Duleep Singh", "Maharani Bamba Duleep Singh", "Victor Duleep Singh", "Frederick Duleep Singh","Princess Bamba Sutherland","Catherine Hilda Duleep Singh","Sophia Duleep Singh"];
var bio = ["Maharani Jind Kaur (c. 1817 – 1 August 1863) was regent of the Sikh Empire from 1843 until 1846. She was the youngest wife of the first Maharaja of the Sikh Empire, Ranjit Singh, and the mother of the last Maharaja, Duleep Singh. She was renowned for her beauty, energy and strength of purpose and was popularly known as Rani Jindan, but her fame is derived chiefly from the fear she engendered in the British in India, who described her as the Messalina of the Punjab After the assassinations of Ranjit Singhs first three successors, Duleep Singh came to power in September 1843 at the age of 5 and Jind Kaur became Regent on her sons behalf. After the Sikhs lost the First Anglo-Sikh War she was replaced in December 1846 by a Council of Regency, under the control of a British Resident. However, her power and influence continued and, to counter this, the British imprisoned and exiled her. Over thirteen years passed before she was again permitted to see her son, who was taken to England. In January 1861 Duleep Singh was allowed to meet his mother in Calcutta and took her with him back to England, where she remained until her death in Kensington, London, on 1 August 1863 at the age of 46. She was temporarily buried in Kensal Green Cemetery and cremated the following year at Nashik, near Bombay. Her ashes were finally taken to the samadh (memorial) in Lahore of her husband, Maharaja Ranjit Singh, by her granddaughter, Princess Bamba Sofia Jindan Duleep Singh.",
"Maharaja Sir Duleep Singh, GCSI (4 September 1838 – 22 October 1893), or Sir Dalip Singh and later in life nicknamed the Black Prince of Perthshire was the last Maharaja of the Sikh Empire. He was Maharaja Ranjit Singh's youngest son, the only child of Maharani Jind Kaur.  He was placed in power in September 1843, at the age of five, with his mother ruling on his behalf, and after their defeat in the Sikh Anglo War, under a British Resident. He was subsequently deposed by the British Crown, and thereafter exiled to Britain at age 15 where he was befriended by Queen Victoria, who is reported to have written of the Punjabi Maharaja: Those eyes and those teeth are too beautiful. The Queen was godmother to several of his children. He died young, living most of his final years in the United Kingdom. His mother had effectively ruled when he was very young and he managed to meet her again on 16 January 1861 in Calcutta and return with her to the United Kingdom. During the last two years of her life, his mother told the Maharaja about his Sikh heritage and the Empire which once had been his to rule. In June 1861, he was one of the first 25 Knights in the Order of the Star of India.",
"Maharani Bamba, Lady Duleep Singh (born Bamba Müller; 6 July 1848 – 18 September 1887), was the Egyptian wife of H.H. Maharaja Sir Duleep Singh. Brought up by Christian missionaries, she married Sir Duleep Singh and became Maharani Bamba, wife of the last Maharaja of Lahore.[1] Her transformation from illegitimate girl, born to a German father and Ethiopian mother, living in a Cairo mission to a Maharani living a life of luxury with the Black Prince of Perthshire has been compared to the Cinderella story.",
"Prince Victor Albert Jay Duleep Singh (10 July 1866 – 7 June 1918) was the eldest son of Maharani Bamba Müller and Maharaja Sir Duleep Singh, the last Maharaja of Lahore, and of the Sikh Empire, and the grandson of Maharaja Ranjit Singh.",
"Prince Frederick Victor Duleep Singh, MVO, TD, FSA (23 January 1868 – 15 August 1926),[1] also known as Prince Freddy, was a younger son of Sir Duleep Singh, the last Maharaja of the Sikh Empire.",
"Princess Bamba Sutherland (29 September 1869 – 10 March 1957) was the last surviving member of the family that had ruled the Sikh Empire in the Punjab. After a childhood in England, she settled in Lahore, the capital of what had been her father's kingdom, where she was a suffragette and a passionate advocate of self rule and independence of India. She was a close and personal friend of Indian revolutionaries whom she hosted like Lala Lajpat Rai.",
"Princess Catherine Hilda Duleep Singh (27 October 1871 – 8 November 1942) was the second daughter of H.H. Maharaja Sir Duleep Singh and Maharani Bamba (née Müller). She was educated in England and in 1894 she was presented at Court. She became a suffragist with her sisters, but did not take part in Emmeline Pankhurst’s Suffragette movement though her sister Sophia did.",

var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images];
    Document.getElementById
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
