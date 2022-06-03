const Ticket = require(`../models/Ticket`);

class MyDB {
  constructor() {
    this.tickets = [];
  }

  // alll methods

  /**
   *  create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);

    return ticket;
  }

  /**
   *
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }

    return result;
  }

  /**
   * return all available ticket
   */

  find() {
    return this.tickets;
  }

  /**
   * find ticket by ticket id
   * @param {string} ticketid
   */

  findById(ticketid) {
    const ticket = this.tickets.find(
      /**
       *
       * @param {Ticket} ticket
       */
      (ticket) => {
        ticket.id == ticketid;
      }
    );
    return ticket;
  }

  /**
   * find by username
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter((ticket) => ticket.username);
    return tickets;
  }

  /**
   * update by id
   * @param {string} ticketId
   * @param {{username:string,price:number}} ticketBody
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.username;
    ticket.updatedAt = new Date();
    return ticket;
  }

  /**
   *
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id == ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else return false;
  }

  /**
   * find winner
   * @param {number} winnerCoundt
   */

  draw(winnerCoundt) {
    let winnerIndeces = new Array(winnerCoundt);
    let index = 0;
    while (index < winnerCoundt) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);

      if (!winnerIndeces.includes(winnerIndex)) {
        winnerIndeces[index++] = winnerIndex;
        continue;
      }
    }

    console.log(winnerIndeces);
    const winners = winnerIndeces.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
