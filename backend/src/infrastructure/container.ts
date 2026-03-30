import { MongoContactRepository } from "./repositories/MongoContactRepository";
import { ContactRepository } from "../domain/repositories/ContactRepository";
import { CreateContactUseCase } from "../application/use-cases/CreateContactUseCase";
import { GetLabProfileUseCase } from "../application/use-cases/GetLabProfileUseCase";
import { GetProjectsUseCase } from "../application/use-cases/GetProjectsUseCase";

/**
 * Dependency injection container for backend services and use cases.
 */
export class Container {
  private static instance: Container | null = null;

  /** Contact repository implementation. */
  private readonly contactRepository: ContactRepository;
  /** Use case for creating contacts. */
  private readonly createContactUseCaseInstance: CreateContactUseCase;
  /** Use case for retrieving lab profile. */
  private readonly getLabProfileUseCaseInstance: GetLabProfileUseCase;
  /** Use case for retrieving projects. */
  private readonly getProjectsUseCaseInstance: GetProjectsUseCase;

  private constructor() {
    this.contactRepository = new MongoContactRepository();
    this.createContactUseCaseInstance = new CreateContactUseCase(this.contactRepository);
    this.getLabProfileUseCaseInstance = new GetLabProfileUseCase();
    this.getProjectsUseCaseInstance = new GetProjectsUseCase();
  }


  /**
   * Returns the global container instance.
   */
  static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  /**
   * Returns the create-contact use case.
   */
  get createContactUseCase(): CreateContactUseCase {
    return this.createContactUseCaseInstance;
  }

  /**
   * Returns the lab profile use case.
   */
  get labProfileUseCase(): GetLabProfileUseCase {
    return this.getLabProfileUseCaseInstance;
  }

  /**
   * Returns the projects use case.
   */
  get projectsUseCase(): GetProjectsUseCase {
    return this.getProjectsUseCaseInstance;
  }
}

