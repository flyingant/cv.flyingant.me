/**
 * Created by FlyingAnt on 12/22/15.
 */
import $ from 'jquery';

module.exports = {

    getAppData: () => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: 'get',
                url: 'https://json.flyingant.me/cv_website.json',
                success: function(data) {
                    resolve(data)
                },
                error: function(error) {
                    reject(error)
                },
            })
        });
    }
}
