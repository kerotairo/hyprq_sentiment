window.template = {

    indexTemplate: function(){
        return $(`<div class='container valign-wrapper' style="height: 100%">
                    <div class="row" style="width: 100%">
                        <div class="col m12 center-align">
                            <input type='hidden' id='ID'>
                            <div class='text'>EXAMPLE SI AYALA AY MAYAMAN PERO bulok ang BPI
                            
                            </div>
                            <br>
                            <div class='buttons'>
                                <button class='waves-effect waves-light btn submit' value='1'>Positive</button>
                                <button class='waves-effect waves-light btn submit' value='2'>Negative</button>
                                <button class='waves-effect waves-light btn submit' value='3'>Not Sure</button>
                                <button class='waves-effect waves-light btn submit' value='4'>Split</button>
                            </div>
                        </div>
                    </div>
                </div>`);
    }
}