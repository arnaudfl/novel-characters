import * as firebase from 'firebase';

const db = firebase.database().ref('/characters');

const getCharactersList = () => {
    let result: { response: object | null, error: string | null } = {
        response: null,
        error: null,
    };
    db.on('value', snapshot => {
        const allCharacters: any[] = [];
        snapshot.forEach(snap => {
          allCharacters.push(snap.val());
        });
        result = { ...result, response: allCharacters };
      }, (error: any) => {
        result = { ...result, error };
      });
    return result;
};

const addCharacter = (data: any) => db.push(data);

const updateCharacter = (key: string, data: any) => db.child(key).update(data);

const deleteCharacter = (key: string) => db.child(key).remove();

export default {
    getCharactersList,
    addCharacter,
    updateCharacter,
    deleteCharacter,
};
