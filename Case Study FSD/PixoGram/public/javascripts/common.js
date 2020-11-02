function getFollowers(userId)
{
    //alert("inside"+userId);
    fetch("/followers/"+userId, {
        method: 'GET',

        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        }
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res);
        if(res.success){
            varResult = document.getElementById("result");
            let str='';
            for (i=0;i<res.data.followers.length;i++)
                    str=str+res.data.followers[i].followUserId;
            console.log(str);
            varResult.innerHTML = `Followers Id  is ${res.data.followers[0].userId} and ${str}`;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });
}

function getUsers() {
    alert("inside");

}


function unFollow(userId,followUserId) {

    alert("inside");

    fetch("/followers/"+userId+"/"+followUserId, {
        method: 'DELETE',
    
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => {
        console.log(res);

        if(res.success){
            window.location.href = '/followers/'+userId;
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });
}


function deleteFollowers(userId)
{
    alert("inside");

    fetch("/followers/"+userId, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(res => {
        console.log(res);

        if(res.success){

            varResult = document.getElementById("result");
            varResult.innerHTML = `No Followers`;
       
        } else {
            alert(res.message);
        }
    }).catch(err => {
        alert(err);console.log(err);
    });
}



function addMedia()
{
    alert("inside");
}


function deleteMedia(username,id)
{
    alert("inside"+username);
    alert("inside"+id);

    fetch("/media/"+id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8', 
          
        }
    }).then(res => {
        console.log("Got response");
        console.log(res);
        window.location.reload();
    }).catch(err => {
        alert(err);console.log(err);
    });



}



function addComment(userId,mediaId)
{
    alert("inside"+userId);
    alert("inside"+mediaId);

}