# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint | method | Description            
| -------- | ------ | ---------------------- 
| `/stock`      | `GET`  | Retreives a list of all items in the cafe.
| `/stock/12`   | `GET`  | Retreives how many items are in stock for a specific item.
| `/stock`      | `POST` | Creates new product in the inventory
| `/stock/12`   | `PATCH`| Updates number of items for a specific item.
| `/stock/12`   | `DELETE` | Deletes product from inventory
| `/customers`  | `GET`  | Retreives a list of customers.
| `/customers/5`| `GET`  | Retreives info on a specific customer.
| `/customers`  | `POST` | Creates new customer.
| `/customers/5`| `PATCH`| Updates partial customer info.
| `/seats`      | `GET`  | Retreives a list of all available seats.
| `/seats/3`    | `PATCH`| Updates the status of a seat (occupied or not).


