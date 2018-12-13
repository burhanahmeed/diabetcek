<template>	
	<div>
      	<div class="header">
      		<h3>About DiabetCek</h3>
      	</div>
      	<div class="card">
    		<p>DiabetCek is an application that serves to help diagnose diabetes from the start. DiabetCek uses machine learning API from Tensorflow and this app mainly build with Vuejs + Nuxtjs.</p>
    	</div>
    	<div class="team">
    		<div style="margin: 10px;">
    			<h4>Team</h4>
    		</div>
        <div class="scrolling">
          <div class="card-team"  v-for="team in teams">
            <img src="/person.png" style="height: 70px;" alt="gambar">
            <h5>{{team.nama}}</h5>
            <p><span class="profile-txt">{{team.title}}</span></p>
            <p><span class="profile-txt"><a :href="`mailto:${team.email}`">Email</a></span></p>
          </div>
        </div>
    	</div>
    </div>
</template>

<style scoped>
	.profile-txt {
		font-size: 10px;
	}
	.card {
		/*background-color: white;*/
		padding: 22px;
		margin: 15px;
		border-radius: 10px;
/*		-webkit-box-shadow: 0px -4px 12px -8px #000000; 
		box-shadow: 0px -4px 12px -8px #000000;*/
	}
  .card p{
    color: #7e7e7e;
  }
	h3, h5, h4, p, span {
		font-family: 'Poppins', sans-serif;
	}
	.header {
		height: 150px;
		/*background-color: grey;*/
		padding: 20px;
		padding-top: 50px;
		color: white;
		background-image: url('/bg.jpg');
    background-size: cover;
	}
	.team {
		/*padding: 20px;*/
    padding-bottom: 80px;
	}
	.card-team {
		background-color: white;
		-webkit-box-shadow: 0px -4px 12px -8px #000000; 
		box-shadow: 0px -4px 12px -8px #000000;
		border-radius: 10px;
		padding: 15px;
		display: inline-block;
		margin: 5px;
		margin-bottom: 40px;
		width: 150px;
		text-align: center;
	}
  .card-team-alternate {
    background-color: white;
    -webkit-box-shadow: 0px -4px 12px -8px #000000; 
    box-shadow: 0px -4px 12px -8px #000000;
    border-radius: 10px;
    padding: 15px;
    display: inline-block;
    margin: 5px;
    margin-bottom: 40px;
    text-align: center;
  }
  .scrolling {
      overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  }
</style>

<script type="text/javascript">
export default {
  data () {
    return {
      teams: [
        {
          nama: 'Burhanuddin Ahmed',
          title: 'Web Application',
          email: 'burhanahmeed@gmail.com'
        },
        {
          nama: 'S. Alpharizi',
          title: 'Machine Learning',
          email: 'septian@gmail.com'
        },
        {
          nama: 'Gamal Akbar',
          title: 'Machine Learning',
          email: 'gamaltn@gmail.com'
        }
      ]
    }
  }
}
</script>
