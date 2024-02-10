//Class defining actors
class Actors {
    constructor (name, role) {
        this.name = name;
        this.role = role;
    }

    describe() {
        return `${this.name} is the ${this.role}.`;
    }
}
//Class defining Movie
class Movie {
    constructor (name) {
        this.name = name;
        this.actors = [];
    }
//adding an actor
    addActor(actor) {
        if (actor instanceof Actors) {
            this.actors.push(actor);
        } else {
            throw new Error(`You can only add and actor, Argument is not an Actor: ${actor}`);
        }
    }
    describe() {
        return `${this.name} has ${this.actors.length} actors.`;
    }
}
//this creates the array for movies
class Menu {
    constructor() {
        this.movies = [];
        this.selectedMovie = null;
    }
//the menu when you open the website
    start() {
        let selection = this.showMainMenuOptions();
        //the functions of the menu
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createMovie();
                    break;
                case '2':
                    this.viewMovie();
                    break;
                case'3':
                    this.deleteMovie();
                    break;
                case'4':
                    this.displayMovies();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert(`Goodbye!`);
    }
//main menu display
    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new movie
        2) view movie
        3) delete movie
        4) display all movies
        `);
    }
//view movie display
    showMovieMenuOptions (movieInfo) {
        return prompt(`
        0) back
        1) create actor
        2) delete actor
        ----------------
        ${movieInfo}
        `);
    }4
//the display movies function shows the movie
    displayMovies(){
        let movieString = '';
        for (let i=0; i < this.movies.length; i++) {
            movieString += i + ') ' + this.movies[i].name + '\n';
        }
        alert(movieString);
    }
    //create movie function
    createMovie() {
        let name = prompt ('Enter name for new Movie:')
        this.movies.push(new Movie(name));
    }
//view movie function
    viewMovie() {
        let index = prompt('Enter the index of the movie you wish to view:');
        if (index > -1 && index < this.movies.length) {
            this.selectedMovie = this.movies[index]; 
            let description = 'Movie Name: ' + this.selectedMovie.name + '\n';

            for (let i = 0; i < this.selectedMovie.actors.length; i++ ) {
                description += i +`) ` + this.selectedMovie.actors[i].name + ' - ' + this.selectedMovie.actors[i].role + '\n';
            }

            let selection = this.showMovieMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createActor();
                    break;
                case '2':
                    this.deleteActor();
            }
        }
    }
    //function to delete the movie
    deleteMovie() {
        let index = prompt(`Enter the Movie you want to delete`);
        if (index > -1 && index < this.movies.length) {
            this.movies.splice(index, 1);
        }
    }

//function to create the actor
    createActor () {
        let name = prompt(`Enter Actor's Name:`)
        let role = prompt(`Enter Role for new Actor:`);
        this.selectedMovie.actors.push(new Actors(name, role));
    }
    //function to delete an actor
    deleteActor() {
        let index = prompt(`Enter the index of the actor you wish to remove`)
        if (index > -1 && index < this.selectedMovie.actors.length) {
            this.selectedMovie.actors.splice(index,1);
        }
    }
}


let menu = new Menu();
menu.start();
