<?php

namespace App\Controller;

use App\Entity\JobCategory;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/recruitment', name: 'recruitment_')]
class RecruitmentController extends AbstractController
{
    /**
     * @var ManagerRegistry
     */
    private ManagerRegistry $managerRegistry;

    public function __construct(ManagerRegistry $managerRegistry)
    {
        $this->managerRegistry = $managerRegistry;
    }

    #[Route('', name: 'home')]
    public function home(): Response
    {
        $jobCategories = $this->managerRegistry->getRepository(JobCategory::class)->findBy([], ['id' => 'ASC']);
        return $this->render('recruitment/index.html.twig', [
            'jobCategories' => $jobCategories
        ]);
    }
}
