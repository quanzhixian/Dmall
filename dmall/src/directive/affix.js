import $ from "zepto"
//封装自定义指令
let affix = {
	inserted (el , binding) {
		let elTop = $(el).offset().top;
		$(document).on('scroll', function () {
			let scrollTop = this.body.scrollTop;
			if(scrollTop>=elTop) {
				$(el).css({
					'position':'fixed',
					'top':binding.value,
					'z-index':100
				}).parent().css({
					'padding-top':$(el).height()
				})
			} else{
				$(el).css({
					'position':'relative',
					'top':0
				})
				.parent().css({
					'padding-top':0
				})
			}
			console.log('scroll')
		})
	},
	unbind () {
		$(document).off('scroll');//换个页面不呢
	}
}

export default affix;