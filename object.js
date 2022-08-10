const people = {
	Name(){
    return 'zb'
  },
	getName: function () {
		return () => {
			console.log(this.Name())
		}
	},
}

var bar = people.getName()

bar()
