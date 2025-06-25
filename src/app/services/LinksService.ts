import { db } from '@app/config/firebaseSDKConfig';
import { ILink } from '@app/model/Links';
import { collection, getDocs } from "firebase/firestore";

const buildLink = (document: any): ILink => {
	return {
		id: document.id,
		isActive: document.data().isActive,
		value: document.data().value,
		label: document.data().label,
		description: document.data().description,
	}
}

export async function fetchLinks() {

	const linkList: ILink[] = [];

	const querySnapshot = await getDocs(collection(db, "links"));
	querySnapshot.forEach((document) => {
		// console.log(`${document.id} => ${ JSON.stringify(document.data())}`);
		linkList.push(buildLink(document));
	});

	return linkList;

}
