App Flow (Pages):

1. Landing Page
2. Sign up Form / Log In Form (will be a modal in the middle of the page)
3. Home Page
4. Account Settings Page
5. Saved Articles
6. Stories - will containe list of categories


Design Pattern (Structure)

App.js: Main Hub of the App. Will Take care of Routing (and all other dependencies)

Containers Folder: all of the page containers
- Whatever is its own page will be its own container 
- Sub folders will be the fucntional components needed for that page


Components Folder: All of the individual components required for the app
- Will be in subfolders for its associated containers 

Navbar - Ricky
Trending Component
Categories Components
User Collection Component
Log In Form 
Sign Up Form 
Search Bar Component





<!-- Potential modal code -->

<!-- // <div class="container">
            //     <section class="greeting">
            //         <div>
            //             <h1>Landing Page</h1>
            //         </div>
            //     </section>

            //     <section class="links">

            //         {/* Sign Up Button */}
            //         <div class="signup-button">
            //             <a className="waves-effect waves-light btn modal-trigger"
            //                 data-target="modal1"
            //             >
            //                 Sign Up
            //             </a>

            //             <div ref={Modal => {
            //                 this.Modal = Modal;
            //             }}
            //                 id="modal1"
            //                 className="modal"
            //             >

            //                 <div className="modal-content">
            //                     <h4>Modal Header</h4>
            //                     <p>This is where the form will be</p>
            //                 </div>
            //                 <div class="modal-footer">
            //                     <a href="#" class="modal-close waves-effect waves-red btn-flat">
            //                         Disagree
            //                     </a>
            //                     <a href="#" class="modal-close waves-effect waves-green btn-flat">
            //                         Agree
            //                     </a>
            //                 </div>
            //             </div>
            //         </div>

            //     </section>



            // </div> -->