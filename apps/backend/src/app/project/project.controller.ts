import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from '../interfaces/project.interface';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller()
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  async create(@Body() createProjectDto: CreateProjectDto) {
    this.projectService.create(createProjectDto);
  }

  @Get()
  async getProjects(): Promise<Project[]> {
    return this.projectService.findAll();
  }
}
