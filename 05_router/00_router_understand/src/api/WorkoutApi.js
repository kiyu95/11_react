import works from "../data/Person.json";

// work 전체 반환
export function getWorkList () {
    
    return works;
}

// WorkDetail 에서 넘겨준 postCode 값과 일치하는 객체를 반환
export function getWorkDetail(postCode) {

    return works.filter(work => work.postCode === parseInt(postCode))[0];
}

export function searchWork(postName) {

    return works.filter(work => work.postName.match(postName));
}