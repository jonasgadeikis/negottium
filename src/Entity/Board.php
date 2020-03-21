<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BoardRepository")
 * @ORM\Table(name="board")
 */
class Board
{
    /**
     * @JMS\Groups({"board.default", "board.single"})
     * @JMS\Type("int")
     *
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     *
     * @var int
     */
    private $id;

    /**
     * @JMS\Groups({"board.default", "board.single"})
     * @JMS\Type("string")
     *
     * @ORM\Column(type="string", length=255)
     *
     * @var string
     */
    private $name;

    /**
     * @JMS\Exclude()
     *
     * @ORM\ManyToOne(targetEntity="User", inversedBy="boards")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     *
     * @var User
     */
    private $user;

    /**
     * @JMS\Groups({"board.single"})
     *
     * @ORM\OneToMany(targetEntity="Task", mappedBy="board", fetch="EAGER")
     *
     * @var Task[]|ArrayCollection
     */
    private $tasks;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user): void
    {
        $this->user = $user;
    }

    /**
     * @return Task[]|ArrayCollection
     */
    public function getTasks()
    {
        return $this->tasks;
    }

    /**
     * @param Task[]|ArrayCollection $tasks
     */
    public function setTasks($tasks): void
    {
        $this->tasks = $tasks;
    }
}
