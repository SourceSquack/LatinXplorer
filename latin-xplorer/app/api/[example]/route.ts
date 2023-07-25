import { NextResponse } from 'next/server'
import { AppResponse } from '../models/app.response'
// DTOS
import { IExampleDto } from './services/dtos/example.dto'
// Services
import exampleService from './services/example.service'

export function GET(req: Request) {
	const result = new AppResponse<IExampleDto>()
	result.response = exampleService.getHello()
	const jsonRes = JSON.stringify(result)
	return new NextResponse(jsonRes)
}

export function POST(req: Request) {
	const response = JSON.stringify('Holaaaaa esto es un post')
	return new NextResponse(response)
}
