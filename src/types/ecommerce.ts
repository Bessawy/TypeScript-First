import { Entity } from "./common"
import { Product } from "./product"
import { User } from "./user"

export class List<T extends Entity> extends Array<T> {

    /* fix function fetchAll to save data in the array once the fetching is successful*/
    async fetchAll(url: string): Promise<T> {
        const jsondata = await fetch(url)
        const data: T | Error = await jsondata.json()
        
        // check if data object is an Error
        if ("name" in data && "message" in data)
        {
            throw `The Error: ${data.name} contains Message: ${data.message}`;
        }
        else{
            this.push(data)
        }

        return data
    }

    /* complete the function sortList() with a parameter "order", which can be 
    either "asc" or "desc". Sort the array by id according to the given order and return the
    reference to the same array*/
    sortList(order: string) : Array<T> { 
        if(order === "asc")
        {
            this.sort(
                (a: T, b: T):any => {
                    return a.id - b.id;
            })

        }
        else if (order === "desc")
        {
            this.sort(
                (a: T, b: T):any => {
                    return b.id - a.id;
            })
        }
        else{
            throw `Wrong parameter is given`;
        }

        return this;
    }

    /* complete method push(), which overrides original "push" method. New item can be added to the array if 
    id does not exist. Only add all the items to the array if every item satisfies the condition.
    Return 1 if can push all new items to the array, otherwise return 0 */
    push(...items: T[]): number {
        const rest_items: T[] = items;
        

        const condition:boolean = this.every(
            (old_item)=>{
                let id_NFound: boolean = true;
                id_NFound = rest_items.every(
                    (new_item)=>{
                        return (new_item.id !== old_item.id)                    
                    }
                )
                return id_NFound;
            }
        )

        if(condition){
            rest_items.forEach(
                (new_item)=>{
                    this.push(new_item)                   
                }
            )
            return 1;
        }
        else{
            return 0;
        }
    }

}

