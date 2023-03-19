import axios from 'axios';

// export async function reqapi(){
//         const api = await axios.get('https://rickandmortyapi.com/api/character');

//         const characterapi = await api.data.results;
        
//         return characterapi;

// }

export async function getPackageData(id, idOrder) {
    axios.defaults.withCredentials = false;

    const req = await axios.post("http://localhost:3005/package", {
        id       : id,
        idOrder  : idOrder
        })
    const PackageData = await req.data.results;
    return PackageData;
}

export async function getCharacterData(id){
        try{
            const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            return res.data;
        }
        catch(err){
            return err.response;
        }
}

export async function getUsersData() {
        axios.defaults.withCredentials = false;
    
        const req = await axios.get("http://localhost:3005/upload/users"
        )
        const usersData = await req.data.results;
        return usersData;
}
