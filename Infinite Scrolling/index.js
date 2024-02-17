// // Function to fetch more content
// function fetchMoreContent() {
//     // Simulate fetching data from a server
//     return new Array(10).fill(1);
//   }
  
//   // Function to append content to the page
//   function appendContent(newContent) {
//     console.log(newContent);
//     const contentContainer = document.getElementById('content');
//     newContent.forEach(item => {
//       const newItem = document.createElement('div');
//       newItem.innerHTML += '1';
//       contentContainer.appendChild(newItem);
//     });
//   }
  

// //scrollWidth and scrollHeight: These properties represent the total width and height of the document, including content that is not visible due to scrolling.

// //scrollTop and scrollLeft: These properties represent the number of pixels that the document is currently scrolled vertically and horizontally, respectively.



// // /clientWidth and clientHeight: These properties represent the width and height of the viewport (visible area) in the browser window, excluding scrollbars and other UI elements.

//   // Infinite scrolling logic
//   let isLoading = false;
//   const content=document.getElementById('content');
//   window.addEventListener('scroll', () => {
//     console.log('in');
//    // Prevent multiple simultaneous requests
//     const {scrollTop, scrollHeight, clientHeight } = document.documentElement;
//     const currHeight=scrollTop;
//     //console.log(scrollTop,'st' );
//    // console.log(scrollTop);
//    // console.log(scrollHeight);
//    //can use window.innerHieght for clientHeight
//     if (scrollTop + clientHeight >= scrollHeight -100) {
//       isLoading = true;
//       console.log('in 2');
//       const arr=fetchMoreContent();
//       appendContent(arr);
//         isLoading = false;
      
//     }
//   });
  