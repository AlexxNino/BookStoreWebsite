const books = [
    {
      id: 1,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '10.99',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A novel about the American dream, wealth, and societal expectations set in the 1920s.',
      rating: 4.5,
      reviews: [
        { reviewer: 'Alice', comment: 'A timeless classic that speaks to the heart of ambition and tragedy.' },
        { reviewer: 'Bob', comment: 'Beautifully written but I found the pacing a bit slow.' },
        { reviewer: 'Catherine', comment: 'An unforgettable narrative about love, power, and loss.' }
      ]
    },
    {
      id: 2,
      name: '1984',
      author: 'George Orwell',
      price: '8.99',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A dystopian novel exploring themes of totalitarianism, surveillance, and control.',
      rating: 4.8,
      reviews: [
        { reviewer: 'David', comment: 'Chillingly relevant even today. A must-read!' },
        { reviewer: 'Emma', comment: 'The concept of Big Brother still gives me goosebumps.' },
        { reviewer: 'Frank', comment: 'A brilliant critique of authoritarian regimes.' }
      ]
    },
    {
      id: 3,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '12.50',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A classic novel that addresses serious issues such as racial inequality and moral growth.',
      rating: 5.0,
      reviews: [
        { reviewer: 'Grace', comment: 'A deeply moving and important book.' },
        { reviewer: 'Henry', comment: 'A beautifully written exploration of justice and humanity.' },
        { reviewer: 'Isabelle', comment: 'This book will make you laugh, cry, and think.' }
      ]
    },
    {
      id: 4,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: '9.99',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A romantic novel that delves into the issues of class, marriage, and social standing.',
      rating: 4.7,
      reviews: [
        { reviewer: 'Jack', comment: 'A delightful read with memorable characters.' },
        { reviewer: 'Katherine', comment: 'One of the greatest love stories ever told.' },
        { reviewer: 'Liam', comment: 'Witty, charming, and full of sharp social commentary.' }
      ]
    },
    {
      id: 5,
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: '11.49',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A story about teenage rebellion and alienation, narrated by the cynical Holden Caulfield.',
      rating: 4.2,
      reviews: [
        { reviewer: 'Megan', comment: 'Holden Caulfield is such a unique and complex character.' },
        { reviewer: 'Nathan', comment: 'A bit overrated, but still an interesting read.' },
        { reviewer: 'Olivia', comment: 'A must-read for anyone who has ever felt lost or misunderstood.' }
      ]
    },
    {
      id: 6,
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: '14.99',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A fantasy adventure that follows Bilbo Baggins on a journey to reclaim a lost treasure.',
      rating: 5.0,
      reviews: [
        { reviewer: 'Patrick', comment: 'An incredible adventure story with unforgettable characters.' },
        { reviewer: 'Quinn', comment: 'Tolkien’s world-building is second to none.' },
        { reviewer: 'Rachel', comment: 'A wonderful introduction to Middle-earth and Tolkien’s works.' }
      ]
    },
    {
      id: 7,
      name: 'Moby-Dick',
      author: 'Herman Melville',
      price: '13.75',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'An epic tale of obsession and revenge, centered around the pursuit of the white whale, Moby Dick.',
      rating: 4.3,
      reviews: [
        { reviewer: 'Sam', comment: 'A challenging read, but well worth the effort.' },
        { reviewer: 'Tina', comment: 'Melville’s prose is dense but poetic.' },
        { reviewer: 'Ursula', comment: 'A dark and powerful story about human nature and obsession.' }
      ]
    },
    {
      id: 8,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: '18.50',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A historical novel that explores the lives of several families during the Napoleonic Wars.',
      rating: 4.9,
      reviews: [
        { reviewer: 'Vince', comment: 'A masterpiece of literature, though it’s quite long.' },
        { reviewer: 'Wendy', comment: 'Tolstoy’s depth of insight into human nature is unparalleled.' },
        { reviewer: 'Xander', comment: 'A richly detailed and immersive historical epic.' }
      ]
    },
    {
      id: 9,
      name: 'The Odyssey',
      author: 'Homer',
      price: '10.75',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'An ancient Greek epic poem that chronicles the adventures of Odysseus as he journeys home.',
      rating: 4.6,
      reviews: [
        { reviewer: 'Yasmine', comment: 'An epic that still holds up after thousands of years.' },
        { reviewer: 'Zach', comment: 'Odysseus’s journey is timeless and full of wisdom.' },
        { reviewer: 'Amber', comment: 'A foundational work of Western literature, still thrilling today.' }
      ]
    },
    {
      id: 10,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: '12.00',
      imagePath: 'https://dummyimage.com/400x700/000/fff',
      description: 'A psychological novel that examines the moral dilemmas faced by a man who commits murder.',
      rating: 4.8,
      reviews: [
        { reviewer: 'Brian', comment: 'A harrowing look into the mind of a criminal.' },
        { reviewer: 'Carmen', comment: 'Dostoevsky’s exploration of guilt and redemption is brilliant.' },
        { reviewer: 'Derek', comment: 'A deeply philosophical novel that will make you question everything.' }
      ]
    }
  ];
  
  export default books;