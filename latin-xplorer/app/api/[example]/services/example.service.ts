// DTOS
import { IExampleDto } from './dtos/example.dto'

class ExampleService {
    getHello (): IExampleDto {
      const res = {
        nombre: 'Holaaaa',
        propiedadRandom: 'A'
      }
  
      return res
    }

    //------------ejemplo con db-----------------------
    // async getAll (): Promise<IListIneDto[]> {
    //   const res = await Modelo.MetodoGetDelORM() 
    //   return res
    // }

  }
  
  export default new ExampleService()
