let db;


function connectToFirebase() {
    var config = {
        // apiKey: "AIzaSyAbJCseU4PrkYSQBdM3NRqWg0UGvb-Fpj4",
        // authDomain: "osc-itp-1553359662966.firebaseapp.com",
        // databaseURL: "https://osc-itp-1553359662966.firebaseio.com/",
        // storageBucket: "gs://osc-itp-1553359662966.appspot.com"

         apiKey: "AIzaSyC2DMLKcV5kjsq-d2fRuNNxwmWLSSyPo1A",
        authDomain: "shuhao02182.firebaseapp.com",
        projectId: "shuhao02182",
        storageBucket: "shuhao02182.appspot.com",
        messagingSenderId: "93972971060",
        appId: "1:93972971060:web:0d9a7d69047522257e5461",
    };
    firebase.initializeApp(config);

    db = firebase.database();

    var myRef = db.ref('group/' + group_id + '/postIts/');
    myRef.on('child_added', (data) => {
        console.log('child_added', data.key, data.val());
        newDecoration(data.key, data.val());
    });

    myRef.on('child_changed', (data) => {
        console.log('child_changed', data.key, data.val());

    });

    myRef.on('child_removed', (data) => {
        console.log('child_removed',  data.key);
    });
}



updateDB(){
    let content = { "text": this.text, "shape": this.shape, "color": this.bgcolor};
    let location = { "x": this.pos.x, "y": this.pos.y, "z": this.pos.z, "xrot": this.rot.x, "yrot": this.rot.y, "zrot": this.rot.z }

    let mydata = {
        'netid': myNetid,
        'member_id': member_id,
        'group_id': group_id,
        'grouping_id': grouping_id,
        'location': location,
        'content': content
    };

    if (this.DBid == -1) {
        let returnInfo = db.ref('group/' + group_id + '/notes/').push(mydata);
        this.DBid = returnInfo.key;
    } else {
        db.ref('group/' + group_id + '/notes/' + current_note.DBid).update(mydata);
    }
}