import { useState, createContext } from 'react';

export const MainContext = createContext();

export const DataContext = (props) => {
    
    const [Data, setData] = useState([
        {
            id : '1',
            title : `Travel's theme for 2022? 'Go big'`,
            body : `The World Travel & Tourism Council, or WTTC, which represents the global travel and tourism industry, projects that travel and tourism in the United States will reach pre-pandemic levels in 2022, contributing nearly $2 trillion to the U.S. economy.`,
            category : 'Tourism',
            date : `February 21, 2022`,
            url : 'https://images.indianexpress.com/2022/02/TRAVEL-TRENDS.jpg?resize=450,250'
        },
        {
            id : '2',
            title : 'Travel and tourism could grow to $8.6 trillion in 2022, says World Travel & Tourism Council',
            body : `"Our sector could recover more than 58 million jobs and generate $8.6 trillion which would boost economic recovery around the world," Julia Simpson, WTTC`,
            category : 'Tourism',
            date : `February 12, 2022`,
            url : 'https://images.indianexpress.com/2022/02/Travel-1200.jpg?resize=450,250'
        },
        {
            id : '3',
            title : 'Historic Trans Bhutan Trail set to reopen for the first time after six decades',
            body : `The 250-mile-long trail runs from Haa in the west to Trashigang in the east, and is one of the most culturally rich and least explored trails in the world.`,
            category : 'Tourism',
            date : `February 1, 2022`,
            url : 'https://images.indianexpress.com/2022/02/Bhutan-trail-1200.jpeg?resize=450,250'
        },
        {
            id : '4',
            title : 'Vegan travel: Its not fringe anymore',
            body : `While vegans and vegetarians are minorities in the United States, a growing number of people are more interested in reducing their meat consumption, often for environmental reasons, as livestock operations significantly produce climate-disruptive methane gas.`,
            category : 'Tourism',
            date : `January 26, 2022`,
            url : 'https://images.indianexpress.com/2022/01/VEGAN-TRAVELERS-2.jpg?resize=450,250'
        },
        {
            id : '5',
            title : '`National Tourism Day 2022: Know more about the history, theme and significance of the day',
            body : `This year's theme, according to the Ministry of Tourism, is - 'Rural and Community Centric Tourism'`,
            category : 'Tourism',
            date : `January 25, 2022`,
            url : 'https://images.indianexpress.com/2022/01/hampi-1200.jpg?resize=450,250'
        },
        {
            id : '1',
            title : `How to master the pull-up`,
            body : `Pull-ups are also beautiful for their simplicity. They require nothing more than a bar, and engage at least a dozen muscles, from the lats all the way to the glutes. Experts say they improve upper body strength, shoulder mobility and core stability, while helping to hone coordination too.`,
            category : 'Fitness',
            date : `March 9, 2022`,
            url : 'https://images.indianexpress.com/2022/03/pull-ups.jpg?resize=450,250'
        },
        {
            id : '2',
            title : `‘These will truly make you feel like a brand new person’: Simple stretches to ‘fix your posture’`,
            body : `Many people tend to spend hours on laptops, working from the bed, or the sofa, hunched over the phone, all of which contribute to bad posture in the long run.`,
            category : 'Fitness',
            date : `March 8, 2022`,
            url : `https://images.indianexpress.com/2022/02/stretching-2.jpg?resize=450,250`
        },
        {
            id : '3',
            title : `Stronger muscles in 3 seconds a day`,
            body : `In the study, men and women who contracted their arm muscles as hard as possible for a total of three seconds a day increased their biceps strength by as much as 12 percent after a month.`,
            category : 'Fitness',
            date : `March 4, 2022`,
            url : `https://images.indianexpress.com/2022/03/pexels-the-lazy-artist-gallery-2247179.jpg?resize=450,250`,
        },
        {
            id : '4',
            title : `Fitness alert: Effective tips to build muscle the right way`,
            body : `Building muscle has many immediate benefits, like better bone mineral density and protection against musculoskeletal injury.`,
            category : 'Fitness',
            date : `March 3, 2022`,
            url : `https://images.indianexpress.com/2021/10/GettyImages-exercises-and-skincare-1200.jpg?resize=450,250`,
        },
        {
            id : '5',
            title : `Woman crushed to death while trying to lift 180kg barbell; important things keep in mind when working out with weights`,
            body : `'One must always begin with lighter weights and then gradually progress. You will have to take all the safety measures before lifting heavy weights,' said Dr Imraan`,
            category : 'Fitness',
            date : `February 24, 2022`,
            url : `https://images.indianexpress.com/2022/02/weight-lifting_1200_getty.jpg?resize=450,250`,
        },
        {
            id : '1',
            title : `80 million people in Russia would lose access to Instagram on Monday `,
            body : `The move to ban Instagram in the country comes a day after Facebook allowed posts that called for the death of Russian President Vladimir Putin.`,
            category : `Technology`,
            date : `January 1, 2022`,
            url : `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/RTS5900Y_0_1200x768.png?6pCXKpUGGQKGZVcRHaFLKANafnDtOjvB&size=170:96`
        },
        {
            id : '2',
            title : `Amazon Fab Phones Fest: Top deals on OnePlus, Redmi and other phones you should not miss `,
            body : `Amazon is offering up to 40 per cent discount on smartphones including from top brands, OnePlus, Xiaomi, Redmi, Samsung, Tecno, Kodak, OPPO, and Realme amongst others.`,
            category : `Technology`,
            date : `December 12, 2021`,
            url : `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-12_at_1.47._1200x768.png?wKbR5AJLGsQjjyKOQMLy9TpWrZuyTI5P&size=170:96`
        },
        {
            id : '3',
            title : `Realme C35 first sale today: Price, specifications and everything else you need to know `,
            body : `The Realme C35 features a design similar to the Realme GT 2 Pro, which is slated to release in India by the end of March. The smartphone will go on its first sale today.`,
            category : `Technology`,
            date : `Sewptember 31, 2021`,
            url : `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-03-12_at_11.18_1200x768.png?.DAxTsP8HjPbk5niFXpA7Icx5rtCDpQB&size=170:96`
        },
        {
            id : '4',
            title : `Flipkart Big Savings Day sale goes live: Offers on iPhone SE, Google Pixel 4a, Motorola Edge 20 Pro and others `,
            body : `Flipkart is offering tons of offers and discounts on smartphones, laptops, home appliances, fashion accessories, and more during the Big Saving Days sale.`,
            category : `Technology`,
            date : `February 2, 2022`,
            url : `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/Screenshot_2022-02-26_at_11.35_0_1200x768.png?2.BopfTa3EW_kHz8fe3Hxgv7pYdSAB6T&size=170:96`
        },
        {
            id : '5',
            title : `Meta employees will now have to do their own laundry as company cuts on-site perks `,
            body : `Meta, the company which owns Facebook, informed its employees via an email that would soon cut down on various perks including free laundry, valet service and dry cleaning.`,
            category : `Technology`,
            date : `April 21, 2022`,
            url : `https://akm-img-a-in.tosshub.com/indiatoday/images/story/202203/RTS67R56_1200x768.png?bawa9eE1XAiyzCFTpUv3EeY8QvOHytHw&size=170:96`
        },
        {
            id :'1',
            title : 'Vidya Balan showers praise on Alia Bhatt’s Gangubai Kathiawadi: ‘How amazing that a female-led film rocked the box office’',
            body : `Vidya Balan says she is elated that the Sanjay Leela Bhansali directorial Gangubai Kathiawadi, starring Alia Bhatt, emerged victorious at the ticket window.`,
            category : 'Bollywood',
            date : 'Mrch 13, 2022',
            url : 'https://images.indianexpress.com/2022/03/vidya-balan-alia-bhatt-1200.jpg?resize=450,250'
        },
        {
            id :'2',
            title : 'Kangana Ranaut calls out Bollywood for its silence on The Kashmir Files’ box office performance: ‘Bullydawood aur unke chamche sadme mein chale gaye hai’',
            body : `Kangana Ranaut said The Kashmir Files has broken every myth and preconceived notion about a film's box office`,
            category : 'Bollywood',
            date : 'March 13, 2022',
            url : 'https://images.indianexpress.com/2022/03/Kashmir-Files-1200.jpg?resize=450,250'
        },
        {
            id :'3',
            title : 'Kriti Sanon: ‘Big commercial entertainers will never go out of style’',
            body : `According to Kriti Sanon, the perception that Hindi cinema has distanced it self from commercial potboilers became stronger in the last two years when Bollywood didn't witness any major theatrical release due to the pandemic`,
            category : 'Bollywood',
            date : 'March 13, 2022',
            url : 'https://images.indianexpress.com/2022/03/kriti-sanon-1200-1.jpg?resize=450,250'
        },
        {
            id :'4',
            title : 'Anushka Sharma is a fan of good light, treats fans to gorgeous new photos',
            body :`Anushka Sharma has taken some time out from her prep for Chakda Xpress. The actor recently shared a series of images on social media.`,
            category : 'Bollywood',
            date : 'March 13, 2022',
            url : 'https://images.indianexpress.com/2022/03/Anushka-Sharma-1200.jpg?resize=450,250'
        },
        {
            id :'5',
            title : 'Karisma Kapoor and Madhuri Dixit bump into each other, fans call it a perfect Dil Toh Pagal Hai moment',
            body : `Karisma Kapoor and Madhuri Dixit bumped into each other during shooting for separate projects. Karisma will be seen in Holi special episode of India's Got Talent.`,
            category : 'Bollywood',
            date : 'March 13, 2022',
            url : 'https://images.indianexpress.com/2022/03/Karisma-Kapoor-1200.jpg?resize=450,250'
        },
        {
            id :'1',
            title : `Healthy eating: Find out how you can add Romanesco broccoli to your plate`,
            body : `Chef Vicky Ratnani took to Instagram to share details about this versatile green!`,
            category : 'Food',
            date : `March 13, 2022`,
            url : `https://images.indianexpress.com/2021/12/Broccoli-IG.jpg?resize=450,250`,
        },
        {
            id :'2',
            title : `Would you like to try gulab jamun paratha?`,
            body : `The dish drew mixed reactions from internet users`,
            category : 'Food',
            date : `March 13, 2022`,
            url : `https://images.indianexpress.com/2022/02/gulab-jamun-paratha_1200_insta.jpg?resize=450,250`,
        },
        {
            id :'3',
            title : `Germany has more Michelin-rated restaurants than ever before`,
            body : `Germany's chefs have been hard at work during the coronavirus pandemic, and there are now over 320 gourmet restaurants. A new 'three star' establishment was even added, the highest caliber Michelin awards.`,
            category : 'Food',
            date : `March 12, 2022`,
            url : `https://images.indianexpress.com/2022/03/DW_Michelin1200.jpg?resize=450,250`,
        },
        {
            id :'4',
            title : `Satiate your evening hunger pangs with this spicy chicken popcorn recipe`,
            body : `If you’re looking for a delicious snack recipe that will be a hit amongst adults and children alike, you have come to the right place.`,
            category : 'Food',
            date : `March 12, 2022`,
            url : `https://images.indianexpress.com/2022/02/chicken-popcorn.jpg?resize=450,250`,
        },
        {
            id :'5',
            title : `‘Nazariya badlo, nazaara badlega’: Inside Bambai Nazariya, a socially-inclusive Mumbai café run by transgenders`,
            body : `Opened about two months back, the café employs only the transgender community, to give them the opportunities 'they rightfully deserve,'' shared Diego`,
            category : 'Food',
            date : `March 11, 2022`,
            url : `https://images.indianexpress.com/2022/03/Bambai-Nazariya-1200.jpg`,
        }
    ]);

    return (
        <>
            <MainContext.Provider value={[Data, setData]}>
                {props.children}
            </MainContext.Provider>
        </>
    )
}