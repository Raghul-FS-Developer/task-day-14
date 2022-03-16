Vue.component("card", {
    props:{
      event:{
        type: Object,
        required: true,
      },
      
    },
  template:
    /*html*/`
    <div class="card__container">
      <h4 class="card__title"> {{event.name}}</h4>
      <div class="row px-2 py-1">
      <div class="col">
      <div class="card__image">
      <img src="https://source.unsplash.com/random" alt="...">
      </div>
      
      </div>
      <div class="col card__data">
        <div>{{event.date}}</div>
        <div>Seats Available: {{event.seatsLeft}}</div>
        <div>
        <button type="button" v-if="event.seatsLeft > 0" class="btn btn-outline-success">Book Now</button>
        <button type="button"  v-else class="btn btn-outline-secondary" disabled>Sold Out</button>
        </div>
      </div>
    </div>
    </div>
        `,
    data: () => {
      return {};
    },
});