import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionsDto } from './dto/create-transactions.dto';
import { UpdateTransactionsDto } from './dto/update-transactions.dto';
import { Transactions } from './entities/transactions.entity';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transactions)
    private transactionsRepository: Repository<Transactions>,
  ) {}

  create(createTransactionsDto: CreateTransactionsDto) {
    return this.transactionsRepository.save(createTransactionsDto);
  }

  findAll() {
    return this.transactionsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} transactions`;
  }

  update(id: number, updateTransactionsDto: UpdateTransactionsDto) {
    return `This action updates a #${id} transactions`;
  }

  remove(id: number) {
    return `This action removes a #${id} transactions`;
  }
}
