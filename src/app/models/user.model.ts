export interface UserModel {
	id: number,
	firstname: string,
	lastname: string,
	framework: Framework
}

enum Framework {
	angular = 'angular',
	react = 'react',
	vue = 'vue'
}
