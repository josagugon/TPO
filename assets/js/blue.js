const blue = new Vue({
    el: '#blue',
    data: {
        info: {},
        time: ""
    },
    created() {
        fetch('https://api.bluelytics.com.ar/v2/latest')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.info = data.blue
                this.time = data.last_update
            })
            .catch(error => console.log(error));
    }
});
