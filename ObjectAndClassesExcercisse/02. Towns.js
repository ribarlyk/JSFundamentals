function towns(array) {
  class Towns {
    constructor(town, latitude, longitude) {
      this.town = town;
      this.latitude = latitude;
      this.longitude = longitude;
    }
    print() {
      console.log(
        `{ town: '${this.town}', latitude: '${this.latitude}', longitude: '${this.longitude}' }`
      );
    }
  }
  for (let i = 0; i < array.length; i++) {
    let token = array[i].split(" | ");
    let town = token[0];
    let latitude = Number(token[1]);

    let longitude = Number(token[2]);
    let obj = new Towns(town, latitude.toFixed(2), longitude.toFixed(2));
    obj.print();
  }
}
towns(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
