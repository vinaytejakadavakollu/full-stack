import { Injectable } from '@angular/core';
import { product } from './product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

books : product[] =[



{
  pid:"03",
  pimg:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
  pgenre:"action",
  pname:"The Hunger Games (The Hunger Games, #1)",
  pprice:"3000",
  pauthor:"Suzanne Collins",
  pabout:"Could you survive on your own in the wild, with every one out to make sure you don't live to see the morning? In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the",
},



{
  pid:"05",
  pimg:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSr3b0yUQBXK9Uv5JqasUBq3UK46u9yR31WnIzsXlmxv7WS05l",
  pgenre:"Horror",
  pname:"The Haunting of Hill House",
  pprice:"4000",
  pauthor:" Shirley Jackson 1959",
  pabout:"The Haunting of Hill House is a 1959 gothic horror novel by American author Shirley Jackson. A finalist for the National Book Award and considered one of the best literary ghost stories published during the 20th century, ",
},

{
  pid:"06",
  pimg:"https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982127794/it-9781982127794_hr.jpg",
  pgenre:"Horror",
  pname:"It",
  pprice:"7000",
  pauthor:" Stephen King 1986",
  pabout:"It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears"
},

{
  pid:"07",
  pimg:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf",
  pgenre:"rom",
  pname:"Pride and Prejudice",
  pprice:"7000",
  pauthor:"Jane Austen 1813",
  pabout:"Pride and Prejudice is an 1813 novel of manners by English author Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty"
},

{
  pid:"04",
  pimg:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT-4C9Q-0yd2rUs-YqckWkIfyUuToAcBNlkLCtu1thu3XxoAdgJ",
  pgenre:"Horror",
  pname:"Dracula",
  pprice:"5000",
  pauthor:"Bram Stoker, 1897",
  pabout:"Dracula is a novel by Bram Stoker, published in 1897. An epistolary novel, the narrative is related through letters, diary entries, and newspaper articles.",
},
{
  pid:"08",
  pimg:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJGWDEUVvZJlGvGovRUsWg40PEuEoXiHOS4yslpO6mhr9QuL8B",
  pgenre:"rom",
  pname:"Outlander",
  pprice:"1000",
  pauthor:"Diana Gabaldon 1991",
  pabout:" Outlander is a historical fantasy novel by American writer Diana Gabaldon, first published in 1991. Initially set around the time of the Second World War, it focuses on nurse Claire Beauchamp, who travels through time to 18th-century Scotland, where she finds "
},


{
  pid:"09",
  pimg:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTI0Z3nCq_J2em9K6BFtKwFk1Zi0h-S6Iwuwl8xHvHjro0T2dHE",
  pgenre:"rom",
  pname:"The Hating Game: A Novel",
  pprice:"2000",
  pauthor:"Sally Thorne 2016",
  pabout:"Now a movie starring Lucy Hale and Austin Stowell, USA Today bestselling author Sally Thorne’s hilarious and sexy workplace comedy all about that thin, fine line between hate and love.Nemesis (n.)"
},

{
  pid:"01",
  pimg:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1529604411i/40604658.jpg",
  pgenre:"action",
  pname:"Jurassic Park (Jurassic Park, #1)",
  pprice:"1000",
  pauthor:"Michael Crichton",
  pabout:"An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind’s most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them—for a price."
},

{
  pid:"02",
  pimg:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546071216i/5907.jpg",
  pgenre:"action",
  pname:"The Hobbit (The Lord of the Rings, #0)",
  pprice:"2000",
  pauthor:"by J.R.R. Tolkien",
  pabout:"In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort."
}
]


getall(){

  return of(this.books)
}

additem(pobj:any){
  this.books.push(pobj)
}

}
